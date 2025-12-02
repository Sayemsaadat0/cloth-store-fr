import { Link, useLocation } from "react-router-dom";
import {
  // LayoutDashboard,
  Briefcase,
  User,
  Scale,
  Grid2X2Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Grid2X2Plus,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: Briefcase,
  },
  {
    title: "Categories",
    url: "/dashboard/categories",
    icon: Briefcase,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
];

export function SidebarNavigation() {
  const location = useLocation();

  return (
    <Sidebar className="">
      <SidebarHeader className="border-b px-4 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-3">
          <Scale className="h-5 w-5 text-black" />
          <span className="font-semibold text-sm text-black">Elegance</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 py-3">
        <SidebarMenu className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={cn(
                    "h-9 px-3",
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-black hover:bg-gray-100"
                  )}
                >
                  <Link to={item.url} className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
