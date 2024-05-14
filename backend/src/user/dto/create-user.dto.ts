import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
  @IsNotEmpty()
  phoneNumber: string;
}
