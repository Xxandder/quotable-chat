import { Schema, model } from "mongoose";
import { ModelName } from "../enums/enums";
import { UserEntity } from "../types/types";

const userSchema = new Schema<UserEntity>(
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
