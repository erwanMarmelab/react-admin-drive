import {
  InfiniteList,
  Datagrid,
  EditButton,
  TextField,
  type Identifier,
  type RaRecord,
  useListContext,
  useGetOne,
} from "react-admin";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Icon } from "./Icon";
import { Empty } from "./Empty";

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
      sx={{ textTransform: "none" }}
      startIcon={<ChevronLeftIcon />}
      >
      {data.name}
      </Button>
    
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
      empty={Empty}
    >
      <Icon />
      <TextField source="name" />
      <TextField source="type" />
      <EditButton />
    </Datagrid>
  );
};
