export enum EmailFormType {
  LOGIN = 'LOGIN',
  PAYMENT = 'PAYMENT',
}

export enum FormState {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUBMITTED = 'SUBMITTED',
  RELEASED = 'RELEASED',
  ERROR = 'ERROR',
}
