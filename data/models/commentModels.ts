export default interface ICommentModel {
  comment: string;
  createdBy: string;
}

export interface DynamoCommentModel extends ICommentModel {
  commentId: string;
  createdAtTime: number;
  isDeleted: boolean;
}
