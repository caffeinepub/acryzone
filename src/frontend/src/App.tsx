import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AboutPage } from "./pages/About";
import { AdminInquiriesPage } from "./pages/AdminInquiries";
import { ContactPage } from "./pages/Contact";
import { CustomOrdersPage } from "./pages/CustomOrders";
import { GalleryPage } from "./pages/Gallery";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});
const customOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/custom-orders",
  component: CustomOrdersPage,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/inquiries",
  component: AdminInquiriesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  customOrdersRoute,
  galleryRoute,
  contactRoute,
  adminInquiriesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
