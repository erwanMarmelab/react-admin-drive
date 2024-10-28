import {
  SimpleForm,
  TextInput,
  SelectInput,
  Toolbar,
  SaveButton,
  WithRecord,
} from "react-admin";
import { EditInDialogButton } from "@react-admin/ra-form-layout";
import Stack from "@mui/material/Stack";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import type { File } from "../types";

export const FolderEditDialog = () => (
  <EditInDialogButton mutationMode="optimistic">
    <SimpleForm toolbar={<ToolbarWithoutDelete />}>
      <TextInput source="name" />
      <WithRecord
        render={(record: File) =>
          record.type === "Folder" ? (
            <SelectInput source="color" choices={colors} />
          ) : null
        }
      />
    </SimpleForm>
  </EditInDialogButton>
);

const ToolbarWithoutDelete = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
    <SaveButton />
  </Toolbar>
);

const colors = [
  {
    id: "black",
    name: (
      <Stack direction="row" alignItems="center" gap={1}>
        <RadioButtonCheckedIcon style={{ color: "black" }} />
        Default
      </Stack>
    ),
  },
  {
    id: "red",
    name: (
      <Stack direction="row" alignItems="center" gap={1}>
        <RadioButtonCheckedIcon style={{ color: "red" }} />
        Red
      </Stack>
    ),
  },
  {
    id: "green",
    name: (
      <Stack direction="row" alignItems="center" gap={1}>
        <RadioButtonCheckedIcon style={{ color: "green" }} />
        Green
      </Stack>
    ),
  },
  {
    id: "blue",
    name: (
      <Stack direction="row" alignItems="center" gap={1}>
        <RadioButtonCheckedIcon style={{ color: "blue" }} />
        Blue
      </Stack>
    ),
  },
  {
    id: "purple",
    name: (
      <Stack direction="row" alignItems="center" gap={1}>
        <RadioButtonCheckedIcon style={{ color: "purple" }} />
        Purple
      </Stack>
    ),
  },
];
