import { Schema, model } from "mongoose";
import { ModelName } from "../enums/enums";
import { IUser } from "../types/types";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    passwordHash: { type: String },
    avatarUrl: { type: String },
  },
  { timestamps: true },
);

const User = model(ModelName.USER, userSchema);

export { User };
