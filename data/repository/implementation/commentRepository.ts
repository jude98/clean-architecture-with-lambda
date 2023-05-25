import { ICommentRepository } from "../interfaces/ICommentRepository";
import { inject, injectable } from "tsyringe";
import { IDynamoStore } from "../../stores/implementation/interfaces/IDynamoStore";

@injectable()
export class CommentRepository implements ICommentRepository {
  constructor(@inject("IDynamoStore") private _db: IDynamoStore) {}

  async getComment(commentId: string): Promise<any> {
    try {
      const comment = await this._db.getItem("CommentsTable", commentId);
      return comment;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }

  async createComment(item: { [key: string]: any }): Promise<boolean> {
    try {
      await this._db.createItem("CommentsTable", item);
      return true;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
