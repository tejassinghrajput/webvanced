import servicesData from "@/mockData/services.json";
import { ServicesFeatureCard } from "./ServicesFeatureCard";
import { GlitterCard } from "../ui/Sparkles";

export function ServicesFeatures() {
  const [visibility, logic] = servicesData.features;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <GlitterCard>
          <ServicesFeatureCard feature={visibility} index={0} />
        </GlitterCard>
        <GlitterCard>
          <ServicesFeatureCard feature={logic} index={1} isDark />
        </GlitterCard>
      </div>
    </section>
  );
}
