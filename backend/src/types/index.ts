export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  errors?: any;
}

export enum UserRole {
  FREELANCER = 'freelancer',
  CLIENT = 'client',
  ADMIN = 'admin'
}

export enum VerificationStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected'
}

export enum ProjectStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum ProposalStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected'
}

export enum PaymentMethod {
  D17 = 'd17',
  FLOUCI = 'flouci',
  BANK_TRANSFER = 'bank_transfer',
  EDINAR = 'edinar'
}

export enum PaymentStatus {
  PENDING = 'pending',
  ESCROWED = 'escrowed',
  RELEASED = 'released',
  REFUNDED = 'refunded'
}

export enum Language {
  FRENCH = 'french',
  ARABIC = 'arabic'
}

export enum NotificationType {
  MESSAGE = 'message',
  PROPOSAL = 'proposal',
  PAYMENT = 'payment',
  REVIEW = 'review',
  SYSTEM = 'system'
}
