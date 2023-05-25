export interface ICommentRepository {
  getComment(commentId: string): Promise<any>; //add return type
  createComment(item: { [key: string]: any }): Promise<boolean>;
}
