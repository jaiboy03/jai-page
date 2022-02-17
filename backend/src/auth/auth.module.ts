import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import {PassportModule} from 'passport';
import {JwtModule} from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import LocalStrategy from 'passport-local';
import JwtStrategy from 'passport-jwt';

@Module({
  imports : [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'jai',
      signOptions: {expiresIn : '60s'}
    }),
    TypeOrmModule.forFeature([User])],
    providers : [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
