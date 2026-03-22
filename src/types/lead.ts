/** Payload — Contact page form  →  POST /api/leads/contact */
export interface ContactLeadPayload {
  name: string;
  email: string;
  phone?: string;
  company: string;
  category: string;
  brief: string;
}

/** Payload — Quote / Consultation form  →  POST /api/leads/quote */
export interface QuoteLeadPayload {
  legalName: string;
  domain: string;
  services: string[];   // e.g. ["ui", "cloud", "eng"]
  objectives: string;
}

/** Payload — Newsletter subscribe  →  POST /api/newsletter/subscribe */
export interface NewsletterPayload {
  email: string;
}

/** Data shape returned on successful lead creation */
export interface LeadCreatedData {
  id: string;           // backend-assigned lead ID
  receivedAt: string;   // ISO 8601 timestamp
}

/** Standard API response shape — every endpoint follows this contract */
export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data: T | null;
  errors: string[] | null;  // field-level validation errors, null on success
  statusCode: number;
}
