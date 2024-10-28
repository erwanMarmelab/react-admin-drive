import { ReferenceField, SimpleShowLayout, WithRecord } from "react-admin";

export const PDFViewer = () => (
  <SimpleShowLayout sx={{ height: "100%" }} id="fullpage">
    <ReferenceField
      source="fileReference"
      reference="files"
      label={false}
      sx={{ height: "100%" }}
    >
      <WithRecord
        render={(record) => (
          <embed
            src={record.url}
            type="application/pdf"
            width="100%"
            height="100%"
            title="Embedded PDF Viewer"
          />
        )}
      />
    </ReferenceField>
  </SimpleShowLayout>
);
