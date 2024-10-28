import { ReferenceField, SimpleShowLayout, WithRecord } from "react-admin";

export const ImageViewer = () => (
  <SimpleShowLayout>
    <ReferenceField source="fileReference" reference="files" label={false}>
      <WithRecord
        render={(record) => (
          <img src={record.url} alt="image" style={{ width: "100%" }} />
        )}
      />
    </ReferenceField>
  </SimpleShowLayout>
);
