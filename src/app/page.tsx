import { Blog } from "@/components/sections/blog";
import Examples from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { FeaturesList } from "@/components/sections/features-list";
import { Stats } from "@/components/sections/stats";
import { Testimonial } from "@/components/sections/testimonial";
import { FeaturedTestimonial } from "@/components/sections/featured-testimonial";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { CTA } from "@/components/sections/cta";
import { ExampleFeatures } from "@/components/ex-features";
import FeaturesChart from "@/components/sections/features-chart";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ExampleFeatures />
      <FeaturesList />
      <Stats />
      <Testimonial />
      <FeaturedTestimonial />
      <FeaturesChart />
      <TestimonialsGrid />
      <CTA />
      {/* <Blog /> */}
      <Footer />
    </main>
  );
}
