import { inject, injectable } from "tsyringe";
import { ICommentService } from "../../services/interfaces/ICommentService";
import { ICommentController } from "../interfaces/ICommentController";

@injectable()
export class CommentController implements ICommentController {
  constructor(
    @inject("ICommentService") private _commentService: ICommentService
  ) {}

  async getCommentById(commentId: string): Promise<any> {
    try {
      if (!commentId)
        return { statusCode: 400, errorMessage: "Invalid request body" };
      const comment = await this._commentService.getComment(commentId);
      return comment;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
