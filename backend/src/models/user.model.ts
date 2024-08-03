import { Schema, model } from "mongoose";
import { ModelName } from "../enums/enums";

interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
  passwordHash?: string;
  avatarUrl?: string;
  isBot: boolean;
}

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    passwordHash: { type: String },
    avatarUrl: { type: String },
    isBot: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

const User = model(ModelName.USER, userSchema);

export { User };
