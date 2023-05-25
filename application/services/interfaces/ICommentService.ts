export interface ICommentService {
  getComment(commentId: string): Promise<any>; //add return type
}
