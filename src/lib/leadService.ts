import { apiPost } from "@/lib/api";
import type {
  ContactLeadPayload,
  QuoteLeadPayload,
  NewsletterPayload,
  LeadCreatedData,
  ApiResponse,
} from "@/types/lead";

/** POST /api/leads/contact — Contact page form submission */
export function submitContactLead(
  payload: ContactLeadPayload
): Promise<ApiResponse<LeadCreatedData>> {
  return apiPost<ContactLeadPayload, LeadCreatedData>("/api/leads/contact", payload);
}

/** POST /api/leads/quote — Quote / consultation request form submission */
export function submitQuoteLead(
  payload: QuoteLeadPayload
): Promise<ApiResponse<LeadCreatedData>> {
  return apiPost<QuoteLeadPayload, LeadCreatedData>("/api/leads/quote", payload);
}

/** POST /api/newsletter/subscribe — Email newsletter opt-in */
export function subscribeNewsletter(
  payload: NewsletterPayload
): Promise<ApiResponse> {
  return apiPost<NewsletterPayload>("/api/newsletter/subscribe", payload);
}
