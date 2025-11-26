/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetAllProductsQuery,
} from "@/redux/api/productApi";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { Input } from "@/components/ui/input";

// -------------------------
// Types
// -------------------------
type FormValues = {
  thumbnail?: FileList;
  name: string;
  description: string;
  category_id: string;
};

// -------------------------
// Main Component
// -------------------------
export default function ProductManagement() {
  const { data: productData, isLoading } = useGetAllProductsQuery("");
  const { data: categoryData } = useGetAllCategoriesQuery("");

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useEditProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selected, setSelected] = useState<any>(null);

  const openCreate = () => {
    setMode("create");
    setSelected(null);
    setOpen(true);
  };

  const openEdit = (product: any) => {
    setMode("edit");
    setSelected(product);
    setOpen(true);
  };

  const handleDelete = async (product: any) => {
    const result = await Swal.fire({
      title: "Delete product?",
      text: `Do you want to delete "${product.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteProduct(product.id).unwrap();
        Swal.fire("Success", res?.message || "Product deleted", "success");
      } catch (error: any) {
        Swal.fire(
          "Error",
          error?.data?.message || "Something went wrong",
          "error"
        );
      }
    }
  };

  const products = productData?.data?.products;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Product Management</h1>
        <Button onClick={openCreate}>Create Product</Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded p-4 border">
        {isLoading ? (
          <p className="text-center py-6">Loading...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    No products found.
                  </TableCell>
                </TableRow>
              ) : (
                products?.map((product: any) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      {product.thumbnail ? (
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        "No image"
                      )}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category_name}</TableCell>
                    <TableCell>
                      <div
                        className="line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" onClick={() => openEdit(product)}>
                          Edit
                        </Button>
                        <Button
                          variant="outlineBtn"
                          size="sm"
                          onClick={() => handleDelete(product)}
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
        )}
      </div>

      {/* Modal Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {mode === "create" ? "Create Product" : `Edit: ${selected?.name}`}
            </DialogTitle>
          </DialogHeader>

          <ProductForm
            mode={mode}
            initialValues={selected}
            categories={categoryData?.data?.categories || []}
            onClose={() => setOpen(false)}
            createProduct={createProduct}
            updateProduct={updateProduct}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// -------------------------
// Product Form Component
// -------------------------
function ProductForm({
  mode,
  initialValues,
  categories,
  onClose,
  createProduct,
  updateProduct,
}: {
  mode: "create" | "edit";
  initialValues?: any;
  categories: any[];
  onClose: () => void;
  createProduct: any;
  updateProduct: any;
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
      description: initialValues?.description ?? "",
      category_id: initialValues?.category_id ?? "",
      thumbnail: undefined,
    },
  });

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      description: initialValues?.description ?? "",
      category_id: initialValues?.category_id ?? "",
      thumbnail: undefined,
    });
  }, [initialValues, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category_id", data.category_id);
      if (data.thumbnail && data.thumbnail[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      let res;
      if (mode === "create") {
        res = await createProduct(formData).unwrap();
        Swal.fire("Success", res?.message || "Product created", "success");
      } else {
        res = await updateProduct({
          id: initialValues.id,
          data: formData,
        }).unwrap();
        Swal.fire("Success", res?.message || "Product updated", "success");
      }

      onClose();
      reset();
    } catch (error: any) {
      Swal.fire(
        "Error",
        error?.data?.message || "Something went wrong",
        "error"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Product name"
          className="border rounded p-2 w-full"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label>Category</Label>
        <select
          {...register("category_id", { required: "Category is required" })}
          className="border rounded p-2 w-full"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-sm text-red-600">{errors.category_id.message}</p>
        )}
      </div>

      <div>
        <Label>Description</Label>
        <SunEditor
          setOptions={{
            height: "150",
          }}
          setContents={watch("description")}
          onChange={(content) => setValue("description", content)}
        />
        {errors.description && (
          <p className="text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div>
        <Label>Thumbnail</Label>
        <Input type="file" accept="image/*" {...register("thumbnail")} />
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
