// @ts-ignore
import { GetItemCommandOutput } from "@aws-sdk/client-dynamodb";

export interface IDynamoStore {
  getItem(tableName: string, PK: string): Promise<GetItemCommandOutput>;
  createItem(tableName: string, item: { [key: string]: any }): Promise<boolean>;
  updateItem(
    tableName: string,
    newComment: string,
    PK: string
  ): Promise<boolean>;
  //   deleteItem(): Promise<boolean>;
}
