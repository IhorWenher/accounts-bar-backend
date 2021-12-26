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

    let numberForWeb = '';

    if (newNumber === 1) {
      numberForWeb = 'AN000001';
    } else if (newNumber < 10) {
      numberForWeb = 'AN00000' + newNumber.toString();
    } else if (newNumber < 100) {
      numberForWeb = 'AN000' + newNumber.toString();
    } else if (newNumber < 1000) {
      numberForWeb = 'AN00' + newNumber.toString();
    } else if (newNumber < 10000) {
      numberForWeb = 'AN0' + newNumber.toString();
    } else if (newNumber < 100000) {
      numberForWeb = 'AN' + newNumber.toString();
    }

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
