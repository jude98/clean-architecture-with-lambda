import { inject, injectable } from "tsyringe";
import { ICommentService } from "../../services/interfaces/ICommentService";
import { ICommentController } from "../interfaces/ICommentController";
import ICommentModel from "../../../data/models/commentModels";

@injectable()
export class CommentController implements ICommentController {
  constructor(
    @inject("ICommentService") private _commentService: ICommentService
  ) {}

  async getCommentById(commentId: string): Promise<any> {
    try {
      // do the request body/ event validation
      if (!commentId)
        return { statusCode: 400, errorMessage: "Invalid request body" };
      const comment = await this._commentService.getComment(commentId);
      return comment;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }

  async createComment(item: ICommentModel): Promise<boolean> {
    try {
      return await this._commentService.createComment(item);
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
