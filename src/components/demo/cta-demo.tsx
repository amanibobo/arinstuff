import { CTASection } from "@/components/ui/cta-section"

export function CTADemo() {
  return (
    <CTASection
      badge={{
        text: "Get started"
      }}
      title="Start building with Launch UI"
      description="Get started with Launch UI and build your landing page in no time"
      action={{
        text: "Get Started",
        href: "/docs",
        variant: "default"
      }}
    />
  )
} 