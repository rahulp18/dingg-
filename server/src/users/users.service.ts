import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...user,
      },
    });
  }
}
