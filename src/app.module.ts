import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AccountsModule,
    MongooseModule.forRoot(process.env.DB_HOST),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
