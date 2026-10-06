import { createServerFn } from "@tanstack/react-start";
import { leadSchema, type LeadInput } from "./leads.schema";

// Server-side re-validation for every lead form. Web3Forms' free plan only accepts
// browser submissions, so delivery happens client-side after this check passes.
export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }): Promise<{ valid: true; bot: boolean; lead: LeadInput }> => {
    return { valid: true, bot: Boolean(data.website), lead: data };
  });
