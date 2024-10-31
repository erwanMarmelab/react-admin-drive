import fakeRestDataProvider from "ra-data-fakerest";
import folders from "./folders.json";
import files from "./files.json";

const baseDataProvider = fakeRestDataProvider(
  { folders, files },
  process.env.NODE_ENV !== "test",
  300,
);

export const dataProvider = {
  ...baseDataProvider,
  search: async (query: string) => {
    const data = folders
      .filter((folder) =>
        folder.name.toLowerCase().includes(query.toLowerCase()),
      )
      .map((folder) => ({
        ...folder,
        content: {
          label: folder.name,
        },
      }));

    return {
      data,
      total: data.length,
    };
  },
};

// TODO: lifecyclecallback -> beforeUpdate('folders', (data) => { ...data, last_updated: new Date() })

// TODO: lifecyclecallback -> afterUpdate('file', (data) => { dataProvider.update('folder', {referenceFile: data.id}, {last_updated: new Date()}) })
