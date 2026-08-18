import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  interests: z.array(z.string().max(80)).max(10).default([]),
  monthly_requirement: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
});

export type EnquiryInput = z.input<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("enquiries").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      location: data.location || null,
      interests: data.interests,
      monthly_requirement: data.monthly_requirement || null,
      message: data.message || null,
    });

    if (error) {
      console.error("Failed to store enquiry", error);
      throw new Error("We could not save your enquiry. Please try again or email us directly.");
    }

    return { ok: true } as const;
  });
