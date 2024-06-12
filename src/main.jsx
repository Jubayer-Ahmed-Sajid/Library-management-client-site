import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </ParallaxProvider>
);
