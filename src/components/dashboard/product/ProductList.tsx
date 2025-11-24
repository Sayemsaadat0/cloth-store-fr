"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";

// ---------------------------------------------
//  Types
// ---------------------------------------------
type Product = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  imageUrl?: string | null;
  material?: string;
  designer?: string;
  sizes: string[];
  colors: string[];
  features: string[];
};

// ---------------------------------------------------
// Zod validation schema
// ---------------------------------------------------
const FormSchema = z.object({
  name: z.string().min(2, "Min 2 chars"),
  category: z.string().min(1, "Category required"),
  shortDescription: z.string().optional(),
  fullDescription: z.string().optional(),
  price: z.string().min(1, "Price is required"),
  image: z.any().nullable().optional(),
  imageUrl: z.string().nullable().optional(),
  material: z.string().optional().nullable().optional(),
  designer: z.string().optional(),
  sizes: z.array(z.string()),
  colors: z.array(z.object({ value: z.string().min(1, "Required") })),
  features: z.array(z.object({ value: z.string().min(1, "Required") })),
});
// infer form type
export type FormValues = z.infer<typeof FormSchema>;

// ---------------------------------------------
// Demo categories
// ---------------------------------------------
const DEMO_CATEGORIES = [
  "Accessories",
  "Clothing",
  "Electronics",
  "Home",
  "Beauty",
];

// ---------------------------------------------
//   ProductList
// ---------------------------------------------
export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "6",
      name: "Luxury Aviator Sunglasses",
      category: "Accessories",
      shortDescription: "Titanium frame with polarized UV protection lenses",
      fullDescription:
        "Iconic aviator style reimagined with modern materials and technology...",
      price: "899",
      imageUrl:
        "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMjI1MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      material: "Titanium & Polarized Glass",
      designer: "Visionary Optics",
      sizes: ["Standard"],
      colors: ["Gold/Brown", "Silver/Gray", "Black/Green"],
      features: [
        "Polarized lenses",
        "100% UV protection",
        "Titanium frame",
        "Leather case included",
      ],
    },
  ]);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selected, setSelected] = useState<Product | null>(null);

  const openCreate = () => {
    setMode("create");
    setSelected(null);
    setOpen(true);
  };

  const openEdit = (prod: Product) => {
    setMode("edit");
    setSelected(prod);
    setOpen(true);
  };

  const handleDelete = async (prod: Product) => {
    const result = await Swal.fire({
      title: "Delete?",
      text: `Delete product "${prod.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      setProducts((prev) => prev.filter((p) => p.id !== prod.id));
      Swal.fire("Deleted", "", "success");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Product Management</h1>
        <Button onClick={openCreate}>Create product</Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded p-4 border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Designer</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No products found.
                </TableCell>
              </TableRow>
            ) : (
              products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="w-20 h-12 bg-slate-100 rounded overflow-hidden">
                      {p.imageUrl ? (
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="text-xs text-slate-500 p-2">
                          No image
                        </div>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>${p.price}</TableCell>
                  <TableCell>{p.designer}</TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" onClick={() => openEdit(p)}>
                        Edit
                      </Button>

                      <Button
                        variant="outlineBtn"
                        size="sm"
                        onClick={() => handleDelete(p)}
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
        <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {mode === "create" ? "Create Product" : `Edit: ${selected?.name}`}
            </DialogTitle>
          </DialogHeader>

          <ProductForm
            mode={mode}
            initialValues={selected}
            categories={DEMO_CATEGORIES}
            onClose={() => setOpen(false)}
            onSubmitSuccess={(newData) => {
              if (mode === "create") {
                setProducts((prev) => [...prev, newData]);
              } else {
                setProducts((prev) =>
                  prev.map((p) =>
                    p.id === newData.id ? { ...p, ...newData } : p
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

/* ----------------------------------------------- */
/*               ProductForm with ZOD               */
/* ----------------------------------------------- */
function ProductForm({
  mode,
  initialValues,
  categories,
  onClose,
  onSubmitSuccess,
}: {
  mode: "create" | "edit";
  initialValues?: Product | null;
  categories: string[];
  onClose: () => void;
  onSubmitSuccess: (p: Product) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      category: initialValues?.category ?? categories[0] ?? "",
      shortDescription: initialValues?.shortDescription ?? "",
      fullDescription: initialValues?.fullDescription ?? "",
      price: initialValues?.price ?? "",
      image: null,
      imageUrl: initialValues?.imageUrl ?? null,
      material: initialValues?.material ?? "",
      designer: initialValues?.designer ?? "",
      sizes: initialValues?.sizes ?? ["Standard"],
      colors: (initialValues?.colors ?? []).map((c) => ({ value: c })),
      features: (initialValues?.features ?? []).map((f) => ({ value: f })),
    },
  });

  // Field arrays
  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({ control, name: "features" });

  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({ control, name: "colors" });

  // Image preview
  const watchedImage = watch("image");
  const watchedImageUrl = watch("imageUrl");
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialValues?.imageUrl ?? null
  );

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      category: initialValues?.category ?? categories[0] ?? "",
      shortDescription: initialValues?.shortDescription ?? "",
      fullDescription: initialValues?.fullDescription ?? "",
      price: initialValues?.price ?? "",
      image: null,
      imageUrl: initialValues?.imageUrl ?? null,
      material: initialValues?.material ?? "",
      designer: initialValues?.designer ?? "",
      sizes: initialValues?.sizes ?? ["Standard"],
      colors: (initialValues?.colors ?? []).map((c) => ({ value: c })),
      features: (initialValues?.features ?? []).map((f) => ({ value: f })),
    });

    setImagePreview(initialValues?.imageUrl ?? null);
    // eslint-disable-next-line
  }, [initialValues]);

  useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      const file = watchedImage[0];
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setValue("imageUrl", url);
      trigger("imageUrl"); // validate
      return () => URL.revokeObjectURL(url);
    } else {
      setImagePreview(watchedImageUrl ?? initialValues?.imageUrl ?? null);
    }
    // eslint-disable-next-line
  }, [watchedImage, watchedImageUrl]);

  const removeImage = () => {
    setValue("image", null);
    setValue("imageUrl", null);
    trigger(["image", "imageUrl"]);
    setImagePreview(null);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const featuresArr =
        data.features?.map((f) => f.value).filter(Boolean) ?? [];
      const colorsArr = data.colors?.map((c) => c.value).filter(Boolean) ?? [];

      let newProduct: Product;

      if (mode === "create") {
        newProduct = {
          id: crypto.randomUUID(),
          name: data.name.trim(),
          category: data.category,
          shortDescription: data.shortDescription ?? "",
          fullDescription: data.fullDescription ?? "",
          price: data.price,
          imageUrl: imagePreview ?? null,
          material: data.material ?? "",
          designer: data.designer ?? "",
          sizes: data.sizes ?? ["Standard"],
          colors: colorsArr,
          features: featuresArr,
        };
        Swal.fire("Success", "Product created", "success");
      } else {
        newProduct = {
          id: initialValues!.id,
          name: data.name.trim(),
          category: data.category,
          shortDescription: data.shortDescription ?? "",
          fullDescription: data.fullDescription ?? "",
          price: data.price,
          imageUrl: imagePreview ?? initialValues?.imageUrl ?? null,
          material: data.material ?? "",
          designer: data.designer ?? "",
          sizes: data.sizes ?? ["Standard"],
          colors: colorsArr,
          features: featuresArr,
        };
        Swal.fire("Success", "Product updated", "success");
      }

      onSubmitSuccess(newProduct);
      onClose();
      reset();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* name + category + price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Product name" />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label>Category</Label>
          <select
            className="w-full px-3 py-2 border rounded"
            {...register("category")}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        <div>
          <Label>Price</Label>
          <Input {...register("price")} placeholder="$0.00" />
          {errors.price && (
            <p className="text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label>Short Description</Label>
        <Textarea
          {...register("shortDescription")}
          placeholder="Short description"
        />
      </div>

      {/* SunEditor */}
      <div>
        <Label>Full Description</Label>
        <SunEditor
          height="220"
          defaultValue={initialValues?.fullDescription ?? ""}
          onChange={(content) => {
            setValue("fullDescription", content);
            trigger("fullDescription");
          }}
          setOptions={{
            buttonList: [
              ["undo", "redo"],
              ["formatBlock"],
              ["bold", "underline", "italic", "strike"],
              ["removeFormat"],
              ["list", "align", "table"],
              ["link", "image"],
            ],
          }}
        />
      </div>

      {/* image */}
      <div>
        <Label>Image</Label>
        <div className="flex items-start gap-4 mt-2">
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="block text-sm file:bg-slate-100 file:px-3 file:py-2"
          />

          <div className="w-28 h-28 bg-slate-100 rounded flex items-center justify-center border">
            {imagePreview ? (
              <div className="relative h-full w-full">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-1 right-1 cursor-pointer bg-red-500 rounded-full text-white size-6 flex items-center justify-center"
                >
                  <X />
                </button>
              </div>
            ) : (
              <p className="text-xs text-slate-500 p-2">No image</p>
            )}
          </div>
        </div>
      </div>

      {/* material + designer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Material</Label>
          <Input {...register("material")} placeholder="Material" />
        </div>
        <div>
          <Label>Designer</Label>
          <Input {...register("designer")} placeholder="Designer" />
        </div>
      </div>

      {/* sizes */}
      <div>
        <Label>Sizes (comma separated)</Label>
        <Input
          defaultValue={(initialValues?.sizes || ["Standard"]).join(", ")}
          onChange={(e) => {
            const arr = e.target.value
              .split(",")
              .map((x) => x.trim())
              .filter(Boolean);
            setValue("sizes", arr);
            trigger("sizes");
          }}
        />
      </div>

      {/* colors */}
      <div>
        <Label>Colors</Label>
        <div className="space-y-2 mt-2">
          {colorFields.map((field, idx) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                {...register(`colors.${idx}.value` as const)}
                defaultValue={field.value}
                placeholder="Color"
              />
              <Button
                type="button"
                variant="outlineBtn"
                onClick={() => removeColor(idx)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button type="button" onClick={() => appendColor({ value: "" })}>
            Add color
          </Button>
        </div>
      </div>

      {/* features */}
      <div>
        <Label>Features</Label>
        <div className="space-y-2 mt-2">
          {featureFields.map((field, idx) => (
            <div key={field.id} className="flex items-center gap-2">
              <Input
                {...register(`features.${idx}.value` as const)}
                defaultValue={field.value}
                placeholder="Feature"
              />
              <Button
                type="button"
                variant="outlineBtn"
                onClick={() => removeFeature(idx)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Button type="button" onClick={() => appendFeature({ value: "" })}>
            Add feature
          </Button>
        </div>
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
