import { CustomCarousel } from "./custom-carousel";

export const App = () => {
  return (
    <section className="pt-[4rem] pb-[2.5rem]">
      <div className="mx-auto px-6 lg:max-w-5xl xl:max-w-7xl">
        <h1 className="font-bold text-2xl text-center mb-8 md:text-3xl">
          Shadcn UI Carousel built with ReactJS
        </h1>
        <CustomCarousel />
      </div>
    </section>
  );
};
