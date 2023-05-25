import { IDynamoStore } from "../interfaces/IDynamoStore";
import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandOutput,
  PutItemCommand,
  UpdateItemCommand,
  //@ts-ignore
} from "@aws-sdk/client-dynamodb";
//@ts-ignore
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

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

  async createItem(
    tableName: string,
    item: { [key: string]: any }
  ): Promise<boolean> {
    try {
      const createQuery = {
        TableName: tableName,
        Item: marshall(item),
      };
      const command = new PutItemCommand(createQuery);
      const response = await this._dynamoClient.send(command);
      return true;
    } catch (err) {
      console.log(`[INFO] ${err}`);
      throw err;
    }
  }

  async updateItem(
    tableName: string,
    newComment: string,
    PK: string
  ): Promise<boolean> {
    // considering the PK is already known
    try {
      const updateQuery = {
        TableName: tableName,
        Key: marshall({ commentId: PK }),
        UpdateExpression: "SET comment = :newComment",
        ExpressionAttributeValues: marshall({
          ":newComment": newComment,
        }),
      };
      const command = new UpdateItemCommand(updateQuery);
      await this._dynamoClient.send(command);
      return true;
    } catch (err) {
      console.log(`[ERROR] ${err}`);
      throw err;
    }
  }
}
