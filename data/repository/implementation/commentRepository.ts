import { ICommentRepository } from "../interfaces/ICommentRepository";
import { inject, injectable } from "tsyringe";
import { IDynamoStore } from "../../stores/interfaces/IDynamoStore";
import ICommentModel, { DynamoCommentModel } from "../../models/commentModels";

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

  async createComment(newComment: ICommentModel): Promise<boolean> {
    try {
      // when creating an item, convert the item to the entity model (with id and other attributes)
      const commentModel: DynamoCommentModel = {
        commentId: "1",
        createdAtTime: Date.now(),
        isDeleted: false,
        ...newComment,
      };
      await this._db.createItem("CommentsTable", commentModel);
      return true;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
