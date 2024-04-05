import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './Base.schema';
import { HydratedDocument } from 'mongoose';
import { USER_ROLES } from 'src/utils/constants';

@Schema()
export class User extends BaseSchema {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  // _id: string;

  @Prop({ required: true, unique: true })
  discordId: string;

  @Prop({ required: false, default: [USER_ROLES.DEFAULT] })
  roles: USER_ROLES[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDoc = HydratedDocument<User>;
