import bcrypt from "bcrypt";

interface IEncryptService {
  hashPassword(password: string): Promise<string>;
  comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
}

export class EncryptService implements IEncryptService {
  private bcryptService: typeof bcrypt;

  private saltRounds: number;

  constructor(bcryptService: typeof bcrypt, saltRounds: number) {
    this.saltRounds = saltRounds;
    this.bcryptService = bcryptService;
  }

  public async hashPassword(password: string): Promise<string> {
    try {
      const hashedPassword = await this.bcryptService.hash(
        password,
        this.saltRounds,
      );
      return hashedPassword;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error with hashing password: ' ${error.message}`);
      } else {
        throw new Error("Unknown error with hashing password:");
      }
    }
  }

  public async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      const isMatch = await this.bcryptService.compare(
        password,
        hashedPassword,
      );
      return isMatch;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error with comparing passwords: ${error.message}`);
      } else {
        throw new Error("Unknown error with comparing passwords:");
      }
    }
  }
}

const encryptService = new EncryptService(bcrypt, parseInt(process.env.SALT_ROUNDS as string, 10));

export default encryptService;
