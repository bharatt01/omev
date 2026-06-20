 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import RootLayout from "./routes/__root";
import Home from "./routes/index";
import Products from "./routes/products";
import ProductPage from "./routes/products.$slug";
import About from "./routes/about";
import Dealers from "./routes/dealers";
import Finance from "./routes/finance";
import TestRide from "./routes/test-ride";
import NotFound from "./components/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:slug" element={<ProductPage />} />
              <Route path="about" element={<About />} />
              <Route path="dealers" element={<Dealers />} />
              <Route path="finance" element={<Finance />} />
              <Route path="test-ride" element={<TestRide />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
