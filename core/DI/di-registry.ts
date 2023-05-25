import "reflect-metadata";
import { container, Lifecycle } from "tsyringe";
import { DynamoStore } from "../../data/stores/implementation/DynamoStores";
import { CommentService } from "../../application/services/implementations/commentService";
import { CommentRepository } from "../../data/repository/implementation/commentRepository";
import { CommentController } from "../../application/controllers/implementation/commentController";

container.registerSingleton("IDynamoStore", DynamoStore); // register the dynamostore as a singleton
container.register("ICommentService", CommentService);
container.register("ICommentRespository", CommentRepository);
container.register("ICommentController", CommentController);

export const diContainer = container; // create the DI container
