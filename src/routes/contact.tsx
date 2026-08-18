import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, submitEnquiry } from "@/lib/enquiries.functions";
import { company, images, interestOptions } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qatalogue — Request a Biomass Fuel Quote" },
      {
        name: "description",
        content:
          "Request a quote for wood chips, industrial firewood or briquettes, or discuss a biomass recovery partnership with the Qatalogue team in Kenya.",
      },
      { property: "og:title", content: "Contact Qatalogue — Request a Biomass Fuel Quote" },
      {
        property: "og:description",
        content: "Tell us your fuel requirement and our team will come back to you.",
      },
      { property: "og:image", content: `https://qatalogue.co.ke${images.conveyorChips}` },
      { name: "twitter:image", content: `https://qatalogue.co.ke${images.conveyorChips}` },
    ],
  }),
  component: Contact,
});

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  monthly_requirement: "",
  message: "",
};

function Contact() {
  const send = useServerFn(submitEnquiry);
  const [form, setForm] = useState(emptyForm);
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof emptyForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse({ ...form, interests });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await send({ data: parsed.data });
      setSent(true);
      setForm(emptyForm);
      setInterests([]);
      toast.success("Enquiry received — we'll be in touch shortly.");
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow text-ember">Contact</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl">
            Tell us what you burn. We'll tell you what we can supply.
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Request a quote</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Share a few details and our team will respond with availability, pricing and delivery
              options.
            </p>

            {sent ? (
              <div className="mt-8 border-l-2 border-forest bg-secondary p-6">
                <p className="font-display text-lg font-bold">Thank you — enquiry received.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've logged your request and will follow up by email. Need something urgent? Call
                  or WhatsApp us on {company.phone}.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" error={errors.name} required>
                    <Input
                      value={form.name}
                      onChange={(e) => update("name")(e.target.value)}
                      placeholder="Jane Wanjiru"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Company" error={errors.company}>
                    <Input
                      value={form.company}
                      onChange={(e) => update("company")(e.target.value)}
                      placeholder="Company or institution"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Email" error={errors.email} required>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email")(e.target.value)}
                      placeholder="you@company.co.ke"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp" error={errors.phone}>
                    <Input
                      value={form.phone}
                      onChange={(e) => update("phone")(e.target.value)}
                      placeholder="+254 …"
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Site location" error={errors.location}>
                    <Input
                      value={form.location}
                      onChange={(e) => update("location")(e.target.value)}
                      placeholder="Town / county"
                    />
                  </Field>
                  <Field label="Estimated monthly requirement" error={errors.monthly_requirement}>
                    <Input
                      value={form.monthly_requirement}
                      onChange={(e) => update("monthly_requirement")(e.target.value)}
                      placeholder="e.g. 60 tonnes / month"
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium">I'm interested in</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {interestOptions.map((option) => {
                      const checked = interests.includes(option);
                      return (
                        <label key={option} className="flex items-center gap-3 text-sm">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(value) =>
                              setInterests((prev) =>
                                value === true
                                  ? [...prev, option]
                                  : prev.filter((item) => item !== option),
                              )
                            }
                          />
                          {option}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label="Anything else we should know?" error={errors.message}>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    rows={5}
                    placeholder="Current fuel, boiler type, delivery constraints…"
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-none bg-ember px-8 text-[0.72rem] font-semibold tracking-[0.16em] text-ember-foreground uppercase hover:bg-ember/90"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="border-t-2 border-ember bg-card p-7">
              <h2 className="font-display text-lg font-bold">Direct contact</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-ember" />
                  <a href={`mailto:${company.email}`} className="hover:underline">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-ember" />
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-ember" />
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
                  <span>{company.location}</span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Contact details are placeholders — send us your final email, phone number and
                physical address and we'll update them.
              </p>
            </div>

            <img
              src={images.conveyorChips}
              alt="Prepared biomass fuel moving along a conveyor"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label}
        {required ? <span className="text-ember"> *</span> : null}
      </Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
