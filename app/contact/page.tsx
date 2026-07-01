import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
      <LocationMap />
    </>
  );
}
