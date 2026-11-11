import { EmailTemplate, EmailTemplateName } from "./email-template.enum";

export interface RenderedEmail {
  subject: string;
  html: string;
  text?: string;
}

/** Interpolate {{key}} placeholders in a template string. */
function interpolate(
  template: string,
  context: Record<string, unknown>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const val = context[key];
    return val != null ? String(val) : "";
  });
}

export function renderEmailTemplate(
  name: EmailTemplateName,
  _locale: string,
  context: Record<string, unknown>,
): RenderedEmail {
  const def = EmailTemplate[name];
  return {
    subject: interpolate(def.subject, context),
    html: interpolate(def.html, context),
    text: def.text ? interpolate(def.text, context) : undefined,
  };
}
