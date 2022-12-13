import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClubModule } from './club/club.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [
    AuthModule,
    UserModule,
    ClubModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
