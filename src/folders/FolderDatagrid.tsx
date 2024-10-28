import {
  Datagrid,
  TextField,
  type Identifier,
  type RaRecord,
  useListContext,
} from "react-admin";

import { Icon } from "./Icon";
import { Empty } from "./Empty";
import { FolderEditDialog } from "./DialogForm";

export const FolderDatagrid = () => {
  const { setFilters } = useListContext();
  return (
    <Datagrid
      sx={{
        "& td:nth-of-type(2)": { width: "40px", paddingRight: "0" },
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
      <FolderEditDialog />
    </Datagrid>
  );
};
