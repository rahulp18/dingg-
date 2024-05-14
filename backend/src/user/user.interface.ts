import { UserRole } from '@prisma/client';

export interface UserPayload {
  sub: number;
  email: string;
  role: UserRole;
}

export interface LoginResponse {
  access_token: string;
}
