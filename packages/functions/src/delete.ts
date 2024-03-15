import { Table } from "sst/node/table";
import handler from "@notes-app/core/handler";
import dynamoDb from "@notes-app/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Notes.tableName,
    Key: {
      userId: "123",
      noteId: event?.pathParameters?.id,
    },
  };

  await dynamoDb.delete(params);

  return JSON.stringify({ status: true });
});