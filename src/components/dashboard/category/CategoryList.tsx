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

type Category = {
  id: string;
  name: string;
  status: boolean;
};

type FormValues = {
  name: string;
  status: boolean;
};

export default function CategoryList() {
  // 🔥 DEMO DATA
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Electronics", status: true },
    { id: "2", name: "Fashion", status: false },
  ]);

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
      setCategories((prev) => prev.filter((c) => c.id !== cat.id));
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
            {categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8">
                  No categories found.
                </TableCell>
              </TableRow>
            ) : (
              categories.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell>{cat.name}</TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        cat.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {cat.status ? "Active" : "Inactive"}
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
            onSubmitSuccess={(newData) => {
              if (mode === "create") {
                setCategories((prev) => [...prev, newData]);
              } else {
                setCategories((prev) =>
                  prev.map((c) =>
                    c.id === newData.id ? { ...c, ...newData } : c
                  )
                );
              }
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// -------------------------------------
// Category Form (Reusable)
// -------------------------------------
function CategoryForm({
  mode,
  initialValues,
  onClose,
  onSubmitSuccess,
}: {
  mode: "create" | "edit";
  initialValues?: Category | null;
  onClose: () => void;
  onSubmitSuccess: (updated: Category) => void;
}) {
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
      status: initialValues?.status ?? true,
    },
  });

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      status: initialValues?.status ?? true,
    });
  }, [initialValues, reset]);

  const status = watch("status");

  const onSubmit = async (data: FormValues) => {
    let newCategory: Category;

    if (mode === "create") {
      newCategory = {
        id: crypto.randomUUID(),
        name: data.name.trim(),
        status: data.status,
      };
      Swal.fire("Success", "Category created", "success");
    } else {
      newCategory = {
        id: initialValues!.id,
        name: data.name.trim(),
        status: data.status,
      };
      Swal.fire("Success", "Category updated", "success");
    }

    onSubmitSuccess(newCategory);
    onClose();
    reset();
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
