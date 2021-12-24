import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema({ versionKey: false, timestamps: true })
export class Account {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  gameName: string;

  @Prop({ required: true })
  sum: Number;

  @Prop({ required: true })
  currency: string;

  @Prop({ default: false })
  payment: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
