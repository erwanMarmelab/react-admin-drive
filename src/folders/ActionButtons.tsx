import {
  WithRecord,
  Button,
  useNotify,
  DeleteWithConfirmButton,
  ReferenceField,
} from "react-admin";
import { Alert, Stack, DialogContentText } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

import { FolderEditDialog } from "./DialogForm";
import type { File, FileType, ReferencedFile } from "../types";

export const ActionButtons = () => {
  const notify = useNotify();
  return (
    <WithRecord<File>
      render={({ type, name }) => (
        <Stack
          className="actionButtons"
          gap={3}
          direction="row-reverse"
          sx={{ visibility: "hidden" }}
        >
          <DeleteWithConfirmButton
            confirmTitle={
              <>
                Delete {type.toLowerCase()} <i>&quot;{name}&quot;</i>
              </>
            }
            confirmContent={
              type === "Folder" ? (
                <DialogContentText>
                  Are you sure you want to delete this folder?
                  <br />
                  It will delete all their children.
                </DialogContentText>
              ) : (
                <DialogContentText>
                  Are you sure you want to delete this file?
                </DialogContentText>
              )
            }
          />
          <FolderEditDialog />
          {type !== "Folder" ? (
            <ReferenceField reference="files" source="fileReference">
              <WithRecord<ReferencedFile>
                render={(file) => (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadFile(name, type, file);
                      notify(
                        <Alert
                          severity="success"
                          sx={{ border: "1px solid #00cc66" }}
                        >
                          &quot;<i>{name}</i>&quot; downloaded
                        </Alert>,
                        {
                          type: "success",
                          severity: "info",
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right",
                          },
                        },
                      );
                    }}
                    label="Export"
                    startIcon={<GetAppIcon />}
                  />
                )}
              />
            </ReferenceField>
          ) : null}
        </Stack>
      )}
    />
  );
};

const downloadFile = (
  fileName: string,
  type: FileType,
  file: ReferencedFile,
) => {
  switch (type) {
    case "Text":
      if ("content" in file) {
        downloadMarkdown(fileName, file.content);
      } else {
        console.error("File does not have a content to download");
      }
      break;
    case "Sheet":
      if ("content" in file) {
        downloadSheet(fileName, file.content);
      } else {
        console.error("File does not have a content to download");
      }
      break;
    default:
      if ("url" in file) {
        downloadAttachement(file.url);
      } else {
        console.error("File does not have a URL to download");
      }
      break;
  }
};

const downloadAttachement = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = url;

  const clickEvnt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(clickEvnt);
  a.remove();
};

const downloadMarkdown = (name: string, content: string) => {
  console.log(`Download ${name}`, content);
  console.log(`Download ${name}`, JSON.stringify(content));
  // TODO: markdown to pdf
};

const downloadSheet = (name: string, content: string) => {
  console.log(`Download ${name}`, content);
  console.log(`Download ${name}`, JSON.stringify(content));
  // TODO: txt to sheet
};
