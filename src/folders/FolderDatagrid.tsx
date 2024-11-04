import {
  Datagrid,
  TextField,
  type Identifier,
  type RaRecord,
  useListContext,
  FunctionField,
  DeleteWithConfirmButton,
  WithRecord,
} from "react-admin";
import { DialogContentText, Stack } from "@mui/material";
import { format, isToday } from "date-fns";

import { Icon } from "./Icon";
import { Empty } from "./Empty";
import { FolderEditDialog } from "./DialogForm";
import type { File } from "../types";

export const lastUpdateFormat = (record: File) =>
  isToday(new Date(record.last_update))
    ? `Today at ${format(record.last_update, "K:mm aa")}`
    : format(record.last_update, "MMMM d, yyyy");

export const FolderDatagrid = () => {
  const { setFilters } = useListContext();
  return (
    <Datagrid
      sx={{
        "& td:nth-of-type(2)": { width: "40px", paddingRight: "0" },
        "& .MuiTableRow-hover:hover": {
          "& .actionButtons": { visibility: "visible" },
        },
      }}
      rowClick={(_id: Identifier, _resource: string, record: RaRecord) => {
        if (record.type === "Folder") {
          setFilters({ parentId: record.id });
          return "";
        }
        if (record.type === "Text" || record.type === "Sheet") return "edit";
        return "show";
      }}
      empty={Empty}
    >
      <Icon />
      <TextField source="name" />
      <TextField source="type" />
      <FunctionField
        source="last_update"
        render={lastUpdateFormat}
        sx={{ color: "text.secondary" }}
      />
      <ActionButtons />
    </Datagrid>
  );
};

const ActionButtons = () => (
  <WithRecord<File>
    render={(record) => (
      <Stack
        className="actionButtons"
        gap={3}
        direction="row-reverse"
        sx={{ visibility: "hidden" }}
      >
        <DeleteWithConfirmButton
          confirmTitle={
            <>
              Delete {record.type.toLowerCase()}{" "}
              <i>&quot;{record.name}&quot;</i>
            </>
          }
          confirmContent={
            record.type === "Folder" ? (
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
        {/* TODO: ExportButton */}
      </Stack>
    )}
  />
);
