/// <reference path="../../types/user.d.ts" />
/// <reference path="../../types/returns.d.ts" />
import { PrismaClient, User } from "@prisma/client";
import Joi from "joi";
import { internalServerErrorReturn } from "../../common/commonReturns";
import { logger } from "../../logger";

const prisma = new PrismaClient();

const UserSignUpSchema = Joi.object<TUserSignUpInput>({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required(),
});

const signUpController = async (user: TUserSignUpInput): Promise<ISuccessBasedReturn<IUser>> => {
  /**
   * validate input data
   */
  const { error } = UserSignUpSchema.validate(user);

  if (error)
    return {
      success: false,
      statusCode: 400,
      message: "Bad Input",
      errors: [error.message],
    };

  /**
   * ensure that no user exists in the db with the same
   * email or username as the one entered now
   */
  let existingUser: User | null = null;

  try {
    existingUser = await prisma.user.findUnique({ where: { email: user.email } });
  } catch (errorFetchingUser: any) {
    logger.error(errorFetchingUser?.message);

    return internalServerErrorReturn;
  }

  if (existingUser) {
    return {
      success: false,
      statusCode: 409,
      message: "User already exists",
      errors: [],
    };
  }

  /**
   * all checks are done
   * create a new user in the db
   */
  let createdUser = null;

  try {
    createdUser = await prisma.user.create({
      data: user,
    });
  } catch (errorCreatingUser: any) {
    logger.error(errorCreatingUser?.message);

    return internalServerErrorReturn;
  }

  if (!user) {
    /**
     * couldn't signup user
     */
    logger.error("Cannot create user");

    return internalServerErrorReturn;
  }

  return {
    success: true,
    statusCode: 201,
    message: "Signup Successful",
    errors: [],
    data: {
      name: createdUser.name,
      email: createdUser.email,
    },
  };
};

export default signUpController;
