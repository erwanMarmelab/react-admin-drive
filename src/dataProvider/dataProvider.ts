import type { DeleteParams } from "react-admin";
import fakeRestDataProvider from "ra-data-fakerest";

import folders from "./folders.json";
import files from "./files.json";

import type { File, ReferencedFile } from "../types";

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
  delete: async (resource: string, params: DeleteParams) => {
    if (resource === "folders") {
      if (params.previousData?.type === "Folder") {
        const children = folders.filter(
          (folder) => folder.parentId === params.id,
        );
        children.forEach((child) => {
          dataProvider.delete("folders", {
            id: child.id,
            previousData: child,
          });
        });
      } else {
        const file = files.find(
          (file) => file.id === params.previousData?.fileReference,
        );
        if (file) {
          dataProvider.delete("files", {
            id: file.id,
            previousData: file,
          });
        }
      }
    }
    return baseDataProvider.delete(resource, params);
  },
};

// TODO: lifecyclecallback -> beforeUpdate('folders', (data) => { ...data, last_updated: new Date() })

// TODO: lifecyclecallback -> afterUpdate('file', (data) => { dataProvider.update('folder', {referenceFile: data.id}, {last_updated: new Date()}) })
