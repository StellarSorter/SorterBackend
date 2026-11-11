import { UserRole } from '@prisma/client';

let counter = 0;

export function buildUser(overrides: Partial<{
  id: string;
  stellarAddress: string | null;
  email: string | null;
  passwordHash: string | null;
  name: string | null;
  company: string | null;
  role: UserRole;
  avatarUrl: string | null;
  verifiedAt: Date | null;
  deactivatedAt: Date | null;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  totpEnabled: boolean;
  totpSecret: string | null;
  taxCountry: string | null;
  taxId: string | null;
}> = {}) {
  counter += 1;
  return {
    id: `user-${counter}`,
    stellarAddress: `GABC${counter}`,
    email: `user${counter}@example.com`,
    passwordHash: null,
    name: `User ${counter}`,
    company: null,
    role: UserRole.COMPANY,
    avatarUrl: null,
    verifiedAt: null,
    deactivatedAt: null,
    deletedAt: null,
    anonymizedAt: null,
    googleId: null,
    totpEnabled: false,
    totpSecret: null,
    failedLoginAttempts: 0,
    lockedUntil: null,
    webhookUrl: null,
    webhookSecret: null,
    timezone: 'UTC',
    rateLimitOverride: null,
    adminSubRole: null,
    planId: null,
    companyOwnerId: null,
    kycStatus: 'NONE',
    kycReviewedAt: null,
    kycReviewedBy: null,
    kycRejectionReason: null,
    locale: 'en',
    allowedCustomFields: [],
    slackWebhookUrl: null,
    discordWebhookUrl: null,
    teamsWebhookUrl: null,
    batchWindowSeconds: 60,
    digestEnabled: false,
    taxCountry: null,
    taxId: null,
    pendingEmail: null,
    emailChangeToken: null,
    emailChangeTokenExpiresAt: null,
    calendarTokenHash: null,
    calendarTokenCreatedAt: null,
    proofSlaDays: 7,
    proofSlaAction: 'ESCALATE_TO_ADMIN',
    createdAt: new Date('2026-01-01T00:00:00Z'),
    updatedAt: new Date('2026-01-01T00:00:00Z'),
    ...overrides,
  };
}
