import { IDynamoStore } from "./interfaces/IDynamoStore";
import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandOutput,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";

export class DynamoStore implements IDynamoStore {
  private readonly _dynamoClient: DynamoDBClient;

  constructor() {
    this._dynamoClient = new DynamoDBClient({});
  }

  async getItem(tableName: string, PK: string): Promise<GetItemCommandOutput> {
    try {
      const inputQuery = {
        TableName: tableName,
        Key: {
          commentId: {
            S: PK,
          },
        },
      };
      const command = new GetItemCommand(inputQuery);
      const response = await this._dynamoClient.send(command);
      return response;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
