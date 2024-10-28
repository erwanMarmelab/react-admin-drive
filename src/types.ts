export type File = {
  id: number;
  name: string;
  parentId: string;
  type: FileType;
  color: Color;
  fileReference: number;
};

export type FileType =
  | "folder"
  | "file_document"
  | "file_image"
  | "file_video"
  | "file_audio"
  | "file_sheet";
export type Color = "red" | "green" | "blue" | "pink" | "purple";
