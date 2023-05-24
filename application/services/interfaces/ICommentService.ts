export interface ICommentService {
  getItem(commentId: string): Promise<any>; //add return type
}
