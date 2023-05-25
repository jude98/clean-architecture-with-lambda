import ICommentModel from "../../models/commentModels";

export interface ICommentRepository {
  getComment(commentId: string): Promise<any>; //add return type
  createComment(newComment: ICommentModel): Promise<boolean>;
}
