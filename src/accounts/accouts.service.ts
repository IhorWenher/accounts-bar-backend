import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {}

  async getAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async create(accountDto: CreateAccountDto): Promise<Account> {
    const newAccount = new this.accountModel(accountDto);
    return newAccount.save();
  }

  async updateById(id: string, accountDto: UpdateAccountDto): Promise<Account> {
    return this.accountModel.findByIdAndUpdate(id, accountDto, { new: true });
  }
}
