import {
  InfiniteList,
  Datagrid,
  EditButton,
  type InfiniteListProps,
  TextField,
} from "react-admin";
import { Icon } from "./Icon";

export const FileList = (props: InfiniteListProps) => (
  <InfiniteList {...props} sort={{ field: "type", order: "DESC" }}>
    <Datagrid
      sx={{
        "& td:nth-child(2)": { width: "40px", paddingRight: "0" },
      }}
    >
      <Icon />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </InfiniteList>
);
