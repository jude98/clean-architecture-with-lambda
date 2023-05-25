import { inject, injectable } from "tsyringe";
import { ICommentService } from "../interfaces/ICommentService";
import { ICommentRepository } from "../../../data/repository/interfaces/ICommentRepository";

@injectable()
export class CommentService implements ICommentService {
  constructor(
    @inject(ICommentRepository) private _commentRepository: ICommentRepository
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
