import {
  InfiniteList,
  Datagrid,
  EditButton,
  TextField,
  type Identifier,
  type RaRecord,
  useListContext,
  Button,
  useGetOne,
} from "react-admin";
import { Icon } from "./Icon";

export const FileList = () => (
  <InfiniteList
    sort={{ field: "type", order: "ASC" }}
    filterDefaultValues={{ parentId: 0 }}
  >
    <BackButton />
    <FileDatagrid />
  </InfiniteList>
);

const BackButton = () => {
  const { filterValues, setFilters } = useListContext();
  const { data, isPending, error } = useGetOne("folders", {
    id: filterValues.parentId,
  });
  if (isPending || error || !data || data.parentId == null) return null;
  return (
    <Button
      onClick={() => {
        setFilters({ parentId: JSON.stringify(data.parentId) || 0 });
      }}
      label={data.name}
    />
  );
};

const FileDatagrid = () => {
  const { setFilters } = useListContext();
  return (
    <Datagrid
      sx={{
        "& td:nth-child(2)": { width: "40px", paddingRight: "0" },
      }}
      rowClick={(_id: Identifier, _resource: string, record: RaRecord) => {
        if (record.type === "Folder") {
          setFilters({ parentId: record.id });
          return "";
        } else return "show";
      }}
    >
      <Icon />
      <TextField source="name" />
      <TextField source="type" />
      <EditButton />
    </Datagrid>
  );
};
