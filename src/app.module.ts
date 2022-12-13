import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClubModule } from './club/club.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [AuthModule, UserModule, ClubModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
