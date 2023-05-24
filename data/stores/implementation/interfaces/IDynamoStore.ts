import { GetItemCommandOutput } from "@aws-sdk/client-dynamodb";

export interface IDynamoStore {
  getItem(tableName: string, PK: string): Promise<GetItemCommandOutput>;
  //   putItem(): Promise<boolean>;
  //   postItem(): Promise<boolean>;
  //   deleteItem(): Promise<boolean>;
}
