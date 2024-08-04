declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    SALT_ROUNDS: string;
    SESSION_SECRET: string;
  }
}
