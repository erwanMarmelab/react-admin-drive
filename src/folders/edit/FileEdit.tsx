import { Edit, useEditContext } from "react-admin";
import { TextEditor } from "./TextEditor";

export const FileEdit = () => (
  <Edit actions={false}>
    <EditPage />
  </Edit>
);

const EditPage = () => {
  const { error, isPending, record } = useEditContext();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!record) return <div>Error: no record</div>;

  if (record.type === "Text") return <TextEditor />;

  return (
    <div>
      <p>{JSON.stringify(record)}</p>
    </div>
  );
};
