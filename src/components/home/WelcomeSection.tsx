import { HeroSection } from "../hero/HeroSection";

export const WelcomeSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
          Welcome to Brick Electronics
        </h1>
        <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6 mb-8">
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Your premier destination for Arduino, Raspberry Pi, and cutting-edge electronic components.
          </p>
        </div>
        <HeroSection />
      </div>
    </section>
  );
}