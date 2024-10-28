import { WithRecord } from "react-admin";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import GridOnIcon from "@mui/icons-material/GridOn";
import { File } from "../types";

export const Icon = () => (
  <WithRecord<File>
    label="icon"
    render={(record) => {
      switch (record.type) {
        case "Text":
          return <DescriptionIcon style={{ color: "red" }} />;
        case "Image":
          return <ImageIcon style={{ color: "greenyellow" }} />;
        case "Video":
          return <SmartDisplayIcon style={{ color: "red" }} />;
        case "Phonic":
          return <AudioFileIcon style={{ color: "red" }} />;
        case "Sheet":
          return <GridOnIcon style={{ color: "green" }} />;
        default:
          return <FolderIcon style={{ color: record.color }} />;
      }
    }}
  />
);
