/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";

// ------------------------------
// Validation Schema
// ------------------------------
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // ------------------------------
  // Submit Handler
  // ------------------------------
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setUser({ token: res?.data?.access_token }));
      toast.success(res?.message || "Login successful");

      navigate("/");
    } catch (error: any) {
      console.log(error);
      const errMsg =
        error?.data?.message || "Something went wrong! Please try again.";
      toast.error(errMsg);
    }
  };

  // ------------------------------
  // UI
  // ------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative w-full max-w-xl">
        <div className="bg-neutral-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-neutral-700/50">
          <div className="text-center mb-8">
            <h1
              className="text-4xl font-serif text-white mb-2"
              style={{ fontStyle: "italic" }}
            >
              Élégance
            </h1>
            <p className="text-neutral-400 text-sm tracking-wide uppercase">
              Member Login
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 lg:space-y-8"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  className="w-full pl-12 pr-4 py-3.5 bg-neutral-900/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer py-3.5 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-neutral-500 text-xs tracking-wide">
            © 2024 Élégance. Crafting Timeless Beauty.
          </p>
        </div>
      </div>
    </div>
  );
}
