import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  image: string;
  bio?: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;