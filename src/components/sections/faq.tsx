import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions,{" "}
              <span className="font-serif font-normal italic text-primary">
                answered.
              </span>
            </>
          }
          center
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
