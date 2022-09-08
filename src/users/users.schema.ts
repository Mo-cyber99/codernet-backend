import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: '404' })
  location: string;

  @Prop({
    default: 'https://cdn-icons-png.flaticon.com/512/1216/1216895.png',
  })
  avatar: string;

  @Prop({ default: '404' })
  bio: string;

  @Prop({ default: '404' })
  dateOfBirth: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
