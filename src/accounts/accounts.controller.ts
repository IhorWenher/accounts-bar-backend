import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountsService } from './accouts.service';
import { Account } from './schemas/account.schema';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Account[]> {
    return this.accountsService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Body() updateAccountDto: UpdateAccountDto,
    @Param(':id') id: string,
  ): Promise<Account> {
    return this.accountsService.updateById(id, updateAccountDto);
  }
}
