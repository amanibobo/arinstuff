import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Container from "../global/container";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
      <BlurText
        word={"Welcome to NextGen"}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
      />
      <Container>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
        NextGen Education LLC is a premier platform dedicated to empowering high school researchers with exclusive publishing opportunities and connections to top institutions.
        </p>
      </Container>
      <Container>
        <div className="flex items-center justify-center md:gap-x-6 mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary/20 to-violet-500/20  group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/about-us">Learn More</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="hidden md:flex"
          >
            <Link href="/apply-here">Apply Now</Link>
          </Button>
        </div>
      </Container>
      <Container>
        <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
          <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

          <div className="rounded-lg lg:rounded-[24px]">
            <video
              src="/images/Comp 2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg lg:rounded-[20px] w-full h-auto"
            >
              <source src="/images/Comp 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
