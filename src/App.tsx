import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ServicesOverview from "./pages/ServicesOverview";
import EcommerceServices from "./pages/EcommerceServices";
import EcommerceServiceDetail from "./pages/EcommerceServiceDetail";
import DigitalMarketing from "./pages/DigitalMarketing";
import DigitalMarketingDetail from "./pages/DigitalMarketingDetail";
import WebDevelopment from "./pages/WebDevelopment";
import WebDevelopmentDetail from "./pages/WebDevelopmentDetail";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GraphicDesigning from "./pages/GraphicDesigning";
import BusinessGrowth from "./pages/Accounting";
import Content from "./pages/Content";
import CaseStudies from "./pages/CaseStudies";

import MarketplaceManagement from "./pages/services/MarketplaceManagement";
import ListingOptimization from "./pages/services/ListingOptimization";
import PpcAdvertising from "./pages/services/PpcAdvertising";
import StoreGrowthStrategy from "./pages/services/StoreGrowthStrategy";
import OperationsManagement from "./pages/services/OperationsManagement";
import FullBrandLaunch from "./pages/services/FullBrandLaunch";
import InternationalExpansion from "./pages/services/InternationalExpansion";
import ProductSourcing from "./pages/services/ProductSourcing";
import DataAnalytics from "./pages/services/DataAnalytics";
import WholesaleArbitrage from "./pages/services/WholesaleArbitrage";
import ExtraPremium from "./pages/services/ExtraPremium";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesOverview />} />

          {/* E-commerce Migration */}
          <Route path="/ecommerce" element={<EcommerceServices />} />
          <Route path="/amazon-services" element={<Navigate to="/ecommerce" replace />} />

          {/* Keep slug routes for both /ecommerce and /amazon-services (redirected internally if needed) */}
          <Route path="/ecommerce/:slug" element={<EcommerceServiceDetail />} />
          <Route path="/amazon-services/:slug" element={<EcommerceServiceDetail />} />

          {/* New service routes */}
          <Route path="/services/marketplace-management" element={<MarketplaceManagement />} />
          <Route path="/services/listing-optimization" element={<ListingOptimization />} />
          <Route path="/services/ppc-advertising" element={<PpcAdvertising />} />
          <Route path="/services/store-growth-strategy" element={<StoreGrowthStrategy />} />
          <Route path="/services/operations-management" element={<OperationsManagement />} />
          <Route path="/services/full-brand-launch" element={<FullBrandLaunch />} />
          <Route path="/services/international-expansion" element={<InternationalExpansion />} />
          <Route path="/services/product-sourcing" element={<ProductSourcing />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/wholesale-arbitrage" element={<WholesaleArbitrage />} />
          <Route path="/services/extra-premium" element={<ExtraPremium />} />

          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/digital-marketing/:slug" element={<DigitalMarketingDetail />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web-development/:slug" element={<WebDevelopmentDetail />} />

          <Route path="/business-growth" element={<BusinessGrowth />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
                      <Route path="/content" element={<Content />} />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/ecommerce-projects" element={<ProjectsPage />} />
          <Route path="/amazon-projects" element={<Navigate to="/ecommerce-projects" replace />} />

          <Route path="/casestudies" element={<CaseStudies />} />

          <Route path="/careers" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  </TooltipProvider>
);


export default App;
