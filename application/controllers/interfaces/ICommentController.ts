export interface ICommentController {
  getCommentById(commentId: string): Promise<any>; //add return type
}
