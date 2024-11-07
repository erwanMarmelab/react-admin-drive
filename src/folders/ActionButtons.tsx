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
                      downloadFile(type, file);
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

const downloadFile = (type: FileType, file: ReferencedFile) => {
  switch (type) {
    case "Text":
      if ("content" in file) {
        downloadMarkdown(file.content);
      } else {
        console.error("File does not have a content to download");
      }
      break;
    case "Sheet":
      // TODO: txt to sheet
      console.log("Download Sheet file", file.content);
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

const downloadMarkdown = (content: string) => {
    console.log("Download Markdown file", content);
    console.log("Download Markdown file", JSON.stringify(content));
};
