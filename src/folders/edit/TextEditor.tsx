import { ReferenceField, SimpleForm } from "react-admin";
import { MarkdownInput } from "@react-admin/ra-markdown";

export const TextEditor = () => (
  <SimpleForm>
    <ReferenceField source="fileReference" reference="files" label={false}>
      <MarkdownInput source="content" />
    </ReferenceField>
  </SimpleForm>
);
