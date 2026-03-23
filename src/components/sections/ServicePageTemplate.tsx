import type { ReactNode } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { COLOR_MAP } from "./service/constants";
import type { ServicePageData, AccentColor } from "./service/types";
import { ServiceHero } from "./service/ServiceHero";
import { ServiceShowcase } from "./service/ServiceShowcase";
import { ServiceBenefitsOffers } from "./service/ServiceBenefitsOffers";
import { ServiceWhyUs } from "./service/ServiceWhyUs";
import { ServiceLeadFormCard } from "./ServiceLeadForm";
import { ServiceBackgroundAnimation } from "./service/ServiceBackgroundAnimation";

export type { ServicePageData, AccentColor };

export interface ServicePageTemplateProps {
  data: ServicePageData;
  icon: ReactNode;
  illustration: ReactNode;
  accentColor?: AccentColor;
}

export function ServicePageTemplate({ data, icon, illustration, accentColor = "indigo" }: ServicePageTemplateProps) {
  const theme = COLOR_MAP[accentColor];

  return (
    <PageLayout>
      <ServiceBackgroundAnimation data={data} theme={theme} />
      
      {/* Hero section now explicitly includes the form module on the right side */}
      <ServiceHero 
        data={data} 
        icon={icon} 
        form={<ServiceLeadFormCard serviceName={data.hero.badge} themeColorClass={theme.accentDark} />} 
        illustration={illustration}
        theme={theme} 
      />

      <div className="relative z-10 flex flex-col">
        <ServiceBenefitsOffers data={data} theme={theme} />
        <ServiceShowcase data={data} icon={icon} theme={theme} />
        <ServiceWhyUs data={data} theme={theme} />
      </div>
    </PageLayout>
  );
}


