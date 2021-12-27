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
    const array = await this.accountModel.find().exec();
    let newNumber = 1;

    if (array.length !== 0) {
      newNumber = array[array.length - 1].accountNumber + 1;
    }

    const str = '' + newNumber;
    const pad = 'AN000000';
    const numberForWeb = pad.substring(0, pad.length - str.length) + str;

    const newAccount = new this.accountModel({
      ...accountDto,
      accountNumber: newNumber,
      accountNumberFront: numberForWeb,
    });

    return newAccount.save();
  }

  async updateById(id: string, accountDto: UpdateAccountDto): Promise<Account> {
    console.log(id, accountDto);

    return this.accountModel.findByIdAndUpdate(id, accountDto, {
      new: true,
    });
  }
}
