const ErrorMessage = {
    SOMETHING_WENT_WRONG: "Something went wrong",
    USER_ALREADY_EXISTS: "User with such email already exists",
    USER_NOT_FOUND: "User not found",
    INCORRECT_PASSWORD: "Password is incorrect"
  } as const;
  
  export { ErrorMessage };
  