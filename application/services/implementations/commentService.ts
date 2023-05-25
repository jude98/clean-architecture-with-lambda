import { inject, injectable } from "tsyringe";
import { ICommentService } from "../interfaces/ICommentService";
import { ICommentRepository } from "../../../data/repository/interfaces/ICommentRepository";
import ICommentModel from "../../../data/models/commentModels";

@injectable()
export class CommentService implements ICommentService {
  constructor(
    @inject(ICommentRepository) private _commentRepository: ICommentRepository
  ) {}

  async getComment(commentId: string): Promise<any> {
    try {
      const response = await this._commentRepository.getComment(commentId);
      return response;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }

  async createComment(item: ICommentModel): Promise<boolean> {
    try {
      return await this._commentRepository.createComment(item);
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
