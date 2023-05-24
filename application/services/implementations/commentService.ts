import { inject, injectable } from "tsyringe";
import { CommentRepository } from "../../../data/repository/implementation/commentRepository";
import { ICommentService } from "../interfaces/ICommentService";

@injectable()
export class CommentService implements ICommentService {
  constructor(
    @inject(CommentRepository) private _commentRepository: CommentRepository
  ) {}

  async getComment(commentId: string): Promise<any> {
    try {
      const response = this._commentRepository.getComment(commentId);
      return response;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
