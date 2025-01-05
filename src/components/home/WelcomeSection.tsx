import { HeroSection } from "../hero/HeroSection";

export const WelcomeSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <HeroSection />
      </div>
    </section>
  );
}