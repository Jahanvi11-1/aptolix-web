import Hero from '../components/Hero';
import Logos from '../components/Logos';
import FeatureFlow from '../components/FeatureFlow';
import StepProcess from '../components/StepProcess';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <main>
      {/* Scroll margin ensures the fixed navbar doesn't cover the content */}
      <section id="top">
        <Hero />
      </section>
      
      <Logos />

      <section id="use-cases" className="scroll-mt-20">
        <FeatureFlow />
      </section>

      <section id="process" className="scroll-mt-20">
        <StepProcess />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <Pricing />
      </section>

      <CallToAction />
      
      <Testimonials />

      <section id="faqs" className="scroll-mt-20">
        <FAQ />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactUs/>
      </section>
      {/* You can add a contact ID to the Footer or a specific section if needed */}
    </main>
  );
}