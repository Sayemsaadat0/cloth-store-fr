/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
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

import {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "@/redux/api/userApi";

type FormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export default function UserList() {
  const { data, isLoading } = useGetUsersQuery(undefined);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [selected, setSelected] = useState(null);

  const openCreate = () => {
    setMode("create");
    setSelected(null);
    setOpen(true);
  };

  const openEdit = (user: any) => {
    setMode("edit");
    setSelected(user);
    setOpen(true);
  };

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (user: any) => {
    const result = await Swal.fire({
      title: "Delete user?",
      text: `Do you want to delete "${user.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteUser(user.id).unwrap();

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res?.message || "User deleted successfully",
        });
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.data?.message || "Something went wrong.",
        });
      }
    }
  };

  const users = data?.data?.users || [];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Button onClick={openCreate}>Create User</Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded p-4 border">
        {isLoading ? (
          <p className="text-center py-6">Loading...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8">
                    No users found.
                  </TableCell>
                </TableRow>
              ) : (
                users?.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="capitalize">{user.role}</TableCell>

                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" onClick={() => openEdit(user)}>
                          Edit
                        </Button>

                        <Button
                          variant="outlineBtn"
                          size="sm"
                          onClick={() => handleDelete(user)}
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

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {mode === "create"
                ? "Create User"
                : `Edit: ${(selected as any)?.name}`}
            </DialogTitle>
          </DialogHeader>

          <UserForm
            mode={mode}
            initialValues={selected}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* -------------------------------------------------------
   Reusable Form Component (Create / Edit)
--------------------------------------------------------- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function UserForm({
  mode,
  initialValues,
  onClose,
}: {
  mode: "create" | "edit";
  initialValues?: any;
  onClose: () => void;
}) {
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name ?? "",
      email: initialValues?.email ?? "",
      password: "",
      password_confirmation: "",
      role: initialValues?.role ?? "user",
    },
  });

  useEffect(() => {
    reset({
      name: initialValues?.name ?? "",
      email: initialValues?.email ?? "",
      password: "",
      password_confirmation: "",
      role: initialValues?.role ?? "user",
    });
  }, [initialValues, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      let res;

      if (mode === "create") {
        res = await createUser(data).unwrap();
        Swal.fire("Success", res?.message || "User created", "success");
      } else {
        res = await updateUser({ id: initialValues.id, ...data }).unwrap();
        Swal.fire("Success", res?.message || "User updated", "success");
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
      {/* Name */}
      <div>
        <Label>Name</Label>
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter name"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password + Confirmation */}
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          {...register("password", {
            required: mode === "create" ? "Password required" : false,
          })}
          placeholder="Enter password"
        />
      </div>

      <div>
        <Label>Confirm Password</Label>
        <Input
          type="password"
          {...register("password_confirmation")}
          placeholder="Confirm password"
        />
      </div>

      {/* Role */}
      <div>
        <Label>Role</Label>
        <select
          className="border rounded p-2 w-full"
          {...register("role", { required: true })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <DialogFooter>
        <Button type="button" variant="outlineBtn" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isSubmitting} type="submit">
          {mode === "create" ? "Create" : "Save"}
        </Button>
      </DialogFooter>
    </form>
  );
}
