import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accouts.service';
import { Account, AccountSchema } from './schemas/account.schema';

@Module({
  providers: [AccountsService],
  controllers: [AccountsController],
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
})
export class AccountsModule {}
