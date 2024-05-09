export const acquireAccount = async (id: number | string) => {
  return {
    username: process.env[`USERNAME_${id}`]!,
    password: process.env[`PASSWORD_${id}`]!,
  };
};
