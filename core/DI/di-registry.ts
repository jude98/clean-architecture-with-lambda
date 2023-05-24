import "reflect-metadata";
import { container, Lifecycle } from "tsyringe";
import { DynamoStore } from "../../data/stores/implementation/DynamoStores";

container.registerSingleton("IDynamoStore", DynamoStore); // register the dynamostore as a singleton

export const diContainer = container; // create the DI container
