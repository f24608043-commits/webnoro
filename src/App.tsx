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
import BlogDetail from "./pages/BlogDetail";
import ProjectDetail from "./pages/ProjectDetail";

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

// SEO/AIEO pages
import TechnologiesOverview from "./pages/technologies/TechnologiesOverview";
import TechnologyDetail from "./pages/technologies/TechnologyDetail";
import IndustriesOverview from "./pages/industries/IndustriesOverview";
import IndustryDetail from "./pages/industries/IndustryDetail";
import LocationsOverview from "./pages/locations/LocationsOverview";
import LocationDetail from "./pages/locations/LocationDetail";
import ResearchOverview from "./pages/research/ResearchOverview";
import ResearchCategoryDetail from "./pages/research/ResearchCategoryDetail";
import ResourcesOverview from "./pages/resources/ResourcesOverview";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

// Tools pages
import WebsiteCostCalculator from "./pages/tools/WebsiteCostCalculator";

// Authors pages
import AuthorDetail from "./pages/authors/AuthorDetail";

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
          <Route path="/projects/:category" element={<ProjectDetail />} />
          <Route path="/projects/:category/:slug" element={<ProjectDetail />} />
          <Route path="/ecommerce-projects" element={<ProjectsPage />} />
          <Route path="/amazon-projects" element={<Navigate to="/ecommerce-projects" replace />} />

          <Route path="/casestudies" element={<CaseStudies />} />

          <Route path="/careers" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* SEO/AIEO Routes */}
          <Route path="/technologies" element={<TechnologiesOverview />} />
          <Route path="/technologies/:slug" element={<TechnologyDetail />} />
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/locations" element={<LocationsOverview />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/research" element={<ResearchOverview />} />
          <Route path="/research/category/:categoryId" element={<ResearchCategoryDetail />} />
          <Route path="/resources" element={<ResourcesOverview />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Tools Routes */}
          <Route path="/tools/website-cost-calculator" element={<WebsiteCostCalculator />} />

          {/* Authors Routes */}
          <Route path="/authors/:authorId" element={<AuthorDetail />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  </TooltipProvider>
);


export default App;
