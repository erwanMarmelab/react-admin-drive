import { Show, useShowContext } from "react-admin";
import { ImageViewer } from "./ImageViewer";
import { VideoPlayer } from "./VideoPlayer";
import { AudioPlayer } from "./AudioPlayer";

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

  switch (record.type) {
    case "Image":
      return <ImageViewer />;
    case "Video":
      return <VideoPlayer />;
    case "Phonic":
        return <AudioPlayer />;
    default:
      return (
        <div>
          <p>{JSON.stringify(record)}</p>
        </div>
      );
  }
};
