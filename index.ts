import { diContainer } from "./core/DI/di-registry";
import { CommentController } from "./application/controllers/implementation/commentController";

export const lambdaHandler = async (event: any): Promise<any> => {
  try {
    const controller: CommentController =
      diContainer.resolve("CommentController");
    return await controller.getCommentById("1234");
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "some error happened",
      }),
    };
  }
};
