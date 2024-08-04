declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    SALT_ROUNDS: number;
  }
}
