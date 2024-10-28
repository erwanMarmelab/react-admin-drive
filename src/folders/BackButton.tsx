import { useGetOne, useListContext } from "react-admin";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const BackButton = () => {
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
