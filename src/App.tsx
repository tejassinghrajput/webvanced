import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const HomePage = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const QuotePage = lazy(() => import("./pages/Quote"));
const HowWeWorkPage = lazy(() => import("./pages/HowWeWork"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Service sub-pages
const ServiceDigitalMarketing = lazy(() => import("./pages/ServiceDigitalMarketing"));
const ServiceSEO = lazy(() => import("./pages/ServiceSEO"));
const ServicePPC = lazy(() => import("./pages/ServicePPC"));
const ServiceContentWriting = lazy(() => import("./pages/ServiceContentWriting"));
const ServiceSocialMedia = lazy(() => import("./pages/ServiceSocialMedia"));
const ServiceGraphicDesign = lazy(() => import("./pages/ServiceGraphicDesign"));
const ServiceLocalSEO = lazy(() => import("./pages/ServiceLocalSEO"));
const ServiceITOutsourcing = lazy(() => import("./pages/ServiceITOutsourcing"));
const ServiceMobileApp = lazy(() => import("./pages/ServiceMobileApp"));
const ServiceTesting = lazy(() => import("./pages/ServiceTesting"));
const ServiceDataServices = lazy(() => import("./pages/ServiceDataServices"));
const ServiceERP = lazy(() => import("./pages/ServiceERP"));
const ServiceWebDevelopment = lazy(() => import("./pages/ServiceWebDevelopment"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-[#fafafa]">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Service sub-pages */}
            <Route path="/services/digital-marketing" element={<ServiceDigitalMarketing />} />
            <Route path="/services/seo" element={<ServiceSEO />} />
            <Route path="/services/ppc" element={<ServicePPC />} />
            <Route path="/services/content-writing" element={<ServiceContentWriting />} />
            <Route path="/services/social-media" element={<ServiceSocialMedia />} />
            <Route path="/services/graphic-design" element={<ServiceGraphicDesign />} />
            <Route path="/services/local-seo" element={<ServiceLocalSEO />} />
            <Route path="/services/it-outsourcing" element={<ServiceITOutsourcing />} />
            <Route path="/services/mobile-app" element={<ServiceMobileApp />} />
            <Route path="/services/testing" element={<ServiceTesting />} />
            <Route path="/services/data-services" element={<ServiceDataServices />} />
            <Route path="/services/erp" element={<ServiceERP />} />
            <Route path="/services/web-development" element={<ServiceWebDevelopment />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
