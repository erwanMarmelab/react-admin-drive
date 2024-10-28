import { ReferenceField, SimpleShowLayout, WithRecord } from "react-admin";
import Typography from "@mui/material/Typography";

export const AudioPlayer = () => (
  <SimpleShowLayout>
    <WithRecord
      render={(record) => (
        <Typography
          component="div"
          variant="h4"
          color="textPrimary"
          textAlign="center"
          paddingBottom={2}
        >
          {record.name}
        </Typography>
      )}
    />
    <ReferenceField source="fileReference" reference="files" label={false}>
      <WithRecord
        render={(record) => (
          <audio controls style={{ width: "100%" }}>
            <source src={record.url} type={`audio/${record.type}`} />
            Your browser does not support the audio tag ({record.type}).
          </audio>
        )}
      />
    </ReferenceField>
  </SimpleShowLayout>
);
