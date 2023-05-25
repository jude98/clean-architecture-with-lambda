import ICommentModel from "../../../data/models/commentModels";

export interface ICommentController {
  getCommentById(commentId: string): Promise<any>; //add return type
  createComment(item: ICommentModel): Promise<boolean>;
}
