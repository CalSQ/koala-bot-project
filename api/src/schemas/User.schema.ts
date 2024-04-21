import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { BaseSchema } from './Base.schema';
import { HydratedDocument } from 'mongoose';
import { USER_ROLES } from 'src/utils/constants';
import { profile } from 'console';
import { RobloxProfile } from 'src/roblox/interfaces/roblox';

@Schema()
export class User extends BaseSchema {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  // _id: string;

  @Prop({ required: true, unique: true })
  discordId: string;

  @Prop(
    raw({
      id: { type: String },
      username: { type: String },
      display_name: { type: String },
      profile_url: { type: String },
      picture_url: { type: String },
    }),
  )
  roblox: RobloxProfile;

  @Prop({ required: false, default: [USER_ROLES.DEFAULT] })
  roles: USER_ROLES[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDoc = HydratedDocument<User>;
