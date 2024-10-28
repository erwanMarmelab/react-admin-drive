import { Show, useShowContext } from "react-admin";
import { ImageViewer } from "./ImageViewer";

export const FileShow = () => (
  <Show>
    <ShowPage />
  </Show>
);

const ShowPage = () => {
  const { error, isPending, record } = useShowContext();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!record) return <div>Error: no record</div>;

  if (record.type === "Image") {
    return <ImageViewer />;
  }

  return (
    <div>
      <p>{JSON.stringify(record)}</p>
    </div>
  );
};
