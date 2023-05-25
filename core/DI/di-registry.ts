import "reflect-metadata";
import { container, Lifecycle } from "tsyringe";
import { DynamoStore } from "../../data/stores/implementation/DynamoStore";
import { CommentService } from "../../application/services/implementations/commentService";
import { CommentRepository } from "../../data/repository/implementation/commentRepository";
import { CommentController } from "../../application/controllers/implementation/commentController";
import { ICommentRepository } from "../../data/repository/interfaces/ICommentRepository";

container.registerSingleton("IDynamoStore", DynamoStore); // register the dynamostore as a singleton
container.register("ICommentService", CommentService);
container.register<ICommentRepository>("ICommentRepository", {
  useClass: CommentRepository,
});
container.register("CommentController", CommentController);

export const diContainer = container; // create the DI container
