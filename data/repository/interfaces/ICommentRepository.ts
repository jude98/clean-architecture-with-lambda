export interface ICommentRepository {
  getComment(commentId: string): Promise<any>; //add return type
}
