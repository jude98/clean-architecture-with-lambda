import { inject, injectable } from "tsyringe";
import { CommentService } from "../../services/implementations/commentService";

@injectable()
export class ICommentRepository {
  constructor(
    @inject("CommentService") private _commentService: CommentService
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
