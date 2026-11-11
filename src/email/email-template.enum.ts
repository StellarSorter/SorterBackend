export enum EmailTemplateName {
  WELCOME = 'welcome',
  ENGAGEMENT_CREATED = 'engagement_created',
  PROOF_SUBMITTED = 'proof_submitted',
  PROOF_REJECTED = 'proof_rejected',
  MILESTONE_UNLOCKED = 'milestone_unlocked',
  MILESTONE_CONFIRMED = 'milestone_confirmed',
  PAYMENT_RELEASED = 'payment_released',
  DISPUTE_RAISED = 'dispute_raised',
  DISPUTE_RESOLVED = 'dispute_resolved',
  REPLACEMENT_REQUESTED = 'replacement_requested',
  ENGAGEMENT_CANCELLED = 'engagement_cancelled',
  PASSWORD_RESET = 'password_reset',
  EMAIL_VERIFICATION = 'email_verification',
  DIGEST = 'digest',
}

export interface EmailTemplateDefinition {
  subject: string;
  html: string;
  text?: string;
}

export const EmailTemplate: Record<EmailTemplateName, EmailTemplateDefinition> = {
  [EmailTemplateName.WELCOME]: {
    subject: 'Welcome to StellarSorter',
    html: '<p>Welcome, {{firstName}}!</p>',
  },
  [EmailTemplateName.ENGAGEMENT_CREATED]: {
    subject: 'Engagement created',
    html: '<p>Your engagement has been created.</p>',
  },
  [EmailTemplateName.PROOF_SUBMITTED]: {
    subject: 'Proof submitted for review',
    html: '<p>A proof has been submitted for review.</p>',
  },
  [EmailTemplateName.PROOF_REJECTED]: {
    subject: 'Proof rejected',
    html: '<p>Your submitted proof was rejected.</p>',
  },
  [EmailTemplateName.MILESTONE_UNLOCKED]: {
    subject: 'Milestone unlocked',
    html: '<p>A milestone has been unlocked.</p>',
  },
  [EmailTemplateName.MILESTONE_CONFIRMED]: {
    subject: 'Milestone confirmed',
    html: '<p>A milestone has been confirmed.</p>',
  },
  [EmailTemplateName.PAYMENT_RELEASED]: {
    subject: 'Payment released',
    html: '<p>Your payment has been released.</p>',
  },
  [EmailTemplateName.DISPUTE_RAISED]: {
    subject: 'Dispute raised',
    html: '<p>A dispute has been raised on your engagement.</p>',
  },
  [EmailTemplateName.DISPUTE_RESOLVED]: {
    subject: 'Dispute resolved',
    html: '<p>Your dispute has been resolved.</p>',
  },
  [EmailTemplateName.REPLACEMENT_REQUESTED]: {
    subject: 'Replacement requested',
    html: '<p>A replacement has been requested.</p>',
  },
  [EmailTemplateName.ENGAGEMENT_CANCELLED]: {
    subject: 'Engagement cancelled',
    html: '<p>Your engagement has been cancelled.</p>',
  },
  [EmailTemplateName.PASSWORD_RESET]: {
    subject: 'Reset your password',
    html: '<p>Click <a href="{{actionUrl}}">here</a> to reset your password. Expires in {{expiresInMinutes}} minutes.</p>',
  },
  [EmailTemplateName.EMAIL_VERIFICATION]: {
    subject: 'Verify your email',
    html: '<p>Your verification code is: <strong>{{code}}</strong></p>',
  },
  [EmailTemplateName.DIGEST]: {
    subject: 'Your StellarSorter digest',
    html: '<p>Here is your digest, {{firstName}}.</p>',
  },
};
