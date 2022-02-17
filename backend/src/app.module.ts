import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth';

@Module({
  controllers: [AppController],
  providers: [AppService, Auth],
  imports: [ TypeOrmModule.forRoot(), AuthModule],
})
export class AppModule { 
  constructor(private connection : Connection){}

}
