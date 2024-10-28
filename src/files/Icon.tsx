import { WithRecord } from "react-admin";
import Typography from "@mui/material/Typography";
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
        case "file_document":
          return <DescriptionIcon style={{ color: "red" }} />;
        case "file_image":
          return <ImageIcon style={{ color: "greenyellow" }} />;
        case "file_video":
          return <SmartDisplayIcon style={{ color: "red" }} />;
        case "file_audio":
          return <AudioFileIcon style={{ color: "red" }} />;
        case "file_sheet":
          return <GridOnIcon style={{ color: "green" }} />;
        default:
          return <FolderIcon style={{ color: record.color }} />;
      }
    }}
  />
);
