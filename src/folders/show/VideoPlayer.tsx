import { ReferenceField, SimpleShowLayout, WithRecord } from "react-admin";

export const VideoPlayer = () => (
  <SimpleShowLayout>
    <ReferenceField source="fileReference" reference="files" label={false}>
      <WithRecord
        render={(record) => (
          <video controls width="100%">
            <source src={record.url} type={`video/${record.type}`} />
            Your browser does not support the video tag ({record.type}).
          </video>
        )}
      />
    </ReferenceField>
  </SimpleShowLayout>
);
