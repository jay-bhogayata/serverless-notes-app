import { Table } from "sst/node/table";
import handler from "@notes-app/core/handler";
import dynamoDb from "@notes-app/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Notes.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return JSON.stringify(result.Items);
});
