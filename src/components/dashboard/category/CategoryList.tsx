/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Switch } from "@/components/ui/switch";

import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/api/categoryApi";

type Category = {
  id: string;
  name: string;
  status: string; // "active" | "inactive"
};

type FormValues = {
  name: string;
  status: boolean; // switch value (true/false)
};

export default function CategoryList() {
  const { data, isLoading } = useGetAllCategoriesQuery({});

  const [deleteCategory] = useDeleteCategoryMutation();

  const categories: Category[] = data?.data?.categories || [];

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selected, setSelected] = useState<Category | null>(null);

  const openCreate = () => {
    setMode("create");
    setSelected(null);
    setOpen(true);
  };

  const openEdit = (cat: Category) => {
    setMode("edit");
    setSelected(cat);
    setOpen(true);
  };

  const handleDelete = async (cat: Category) => {
    const result = await Swal.fire({
      title: "Delete?",
      text: `Delete category "${cat.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      await deleteCategory(cat.id);
      Swal.fire("Deleted", "", "success");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Category Management</h1>
        <Button onClick={openCreate}>Create category</Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded p-4 border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8">
                  No categories found.
                </TableCell>
              </TableRow>
            ) : (
              categories?.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell>{cat.name}</TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        cat.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {cat.status}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" onClick={() => openEdit(cat)}>
                        Edit
                      </Button>

                      <Button
                        variant="outlineBtn"
                        size="sm"
                        onClick={() => handleDelete(cat)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {mode === "create"
                ? "Create Category"
                : `Edit: ${selected?.name}`}
            </DialogTitle>
          </DialogHeader>

          <CategoryForm
            mode={mode}
            initialValues={selected}
            onClose={() => setOpen(false)}
            onSubmitSuccess={() => {}}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoryForm({
  mode,
  initialValues,
  onClose,
  onSubmitSuccess,
}: {
  mode: "create" | "edit";
  initialValues?: Category | null;
  onClose: () => void;
  onSubmitSuccess: () => void;
}) {
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useEditCategoryMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name ?? "",
      status: initialValues?.status === "active" ? true : false,
    },
  });

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      status: initialValues?.status === "active" ? true : false,
    });
  }, [initialValues, reset]);

  const status = watch("status");

  const onSubmit = async (data: FormValues) => {
    const payload = {
      name: data.name.trim(),
      status: data.status ? "active" : "inactive",
    };

    try {
      let res;

      if (mode === "create") {
        res = await createCategory(payload).unwrap();

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res?.message || "Category created successfully",
        });
      } else {
        res = await updateCategory({
          id: initialValues!.id,
          data: payload,
        }).unwrap();

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res?.message || "Category updated successfully",
        });
      }

      // Callback to parent
      onSubmitSuccess();

      onClose();
      reset();
    } catch (err: any) {
      const backendMessage =
        err?.data?.message || err?.error || "Something went wrong. Try again.";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: backendMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Category name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Status */}
      <div className="flex items-center justify-between">
        <Label>Status</Label>
        <Switch
          checked={status}
          onCheckedChange={(value: boolean) => setValue("status", value)}
        />
      </div>

      <DialogFooter>
        <Button type="button" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isSubmitting} type="submit">
          {mode === "create" ? "Create" : "Save"}
        </Button>
      </DialogFooter>
    </form>
  );
}
