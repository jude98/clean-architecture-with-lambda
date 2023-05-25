import ICommentModel from "../../../data/models/commentModels";

export interface ICommentService {
  getComment(commentId: string): Promise<any>; //add return type
  createComment(item: ICommentModel): Promise<boolean>;
}
