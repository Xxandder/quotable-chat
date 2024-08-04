import { CommonEntity } from "./common-entity.type";

type UserEntity = CommonEntity & {
  firstName: string;
  lastName: string;
  email?: string;
  passwordHash?: string;
  avatarUrl: string;
}

export { UserEntity };
