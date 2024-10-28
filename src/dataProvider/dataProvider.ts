import fakeRestDataProvider from "ra-data-fakerest";
import data from "./data.json";
import folders from "./folders.json";
import files from "./files.json";

export const dataProvider = fakeRestDataProvider(
  { ...data, folders, files },
  process.env.NODE_ENV !== "test",
  300,
);
