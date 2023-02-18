/// <reference path="../../types/user.d.ts" />
/// <reference path="../../types/returns.d.ts" />
import { PrismaClient, User } from "@prisma/client";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { internalServerErrorReturn } from "../../common/commonReturns";
import { logger } from "../../logger";

const prisma = new PrismaClient();

const UserSignInSchema = Joi.object<TUserSignInInput>({
  email: Joi.string().min(3).max(30).required(),
});

const signInController = async (data: TUserSignInInput): Promise<ISuccessBasedReturn<IUserLogin>> => {
  /**
   * validate input data
   */
  const { error } = UserSignInSchema.validate(data);

  if (error)
    return {
      success: false,
      statusCode: 400,
      message: "Bad Input",
      errors: [error.message],
    };

  /**
   * the input email is searched in the db
   * if no record is found the user has entered incorrect
   * details
   */
  let existingUser: User | null = null;

  try {
    existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  } catch (errorFetchingUserUsingEmail: any) {
    logger.error(errorFetchingUserUsingEmail?.message);

    return internalServerErrorReturn;
  }

  const incorrectEmailOrPasswordResponse = {
    success: false,
    statusCode: 404,
    message: "User does not exist or password is incorrect.",
    errors: [],
  };

  if (existingUser === null) {
    return incorrectEmailOrPasswordResponse;
  }

  /**
   * the signIn controller returns an authorization token rather than
   * creating a session as this is rest api
   * this behavior can be changed in the future if required
   */
  let token: string = "";

  try {
    token = jwt.sign(
      { email: existingUser.email, iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      process.env.JWT_SECRET as string,
      {
        issuer: "open-auto",
      }
    );
  } catch (errorWhileSigningJWT: any) {
    logger.log(errorWhileSigningJWT?.message);

    return internalServerErrorReturn;
  }

  /**
   * all checks are done, auth token is created
   * the client may be handed over the authorization information
   * for access to the system
   */
  return {
    success: true,
    statusCode: 200,
    message: "Login Successful",
    errors: [],
    data: {
      token: token,
      email: existingUser.email,
    },
  };
};

export default signInController;
