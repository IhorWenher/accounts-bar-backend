import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AccountsModule,
    MongooseModule.forRoot(
      'mongodb+srv://IhorVenher:kbYqO1r8UKSi26qy@cluster0.0lamy.mongodb.net/accounts_db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* kbYqO1r8UKSi26qy */
