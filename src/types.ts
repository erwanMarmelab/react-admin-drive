export type File = {
  id: number;
  name: string;
  parentId: string;
  type: FileType;
  color: Color;
  fileReference: number;
  last_update: string;
};

export type FileType =
  | "Folder"
  | "Text"
  | "Image"
  | "Video"
  | "Phonic"
  | "PDF"
  | "Sheet";
export type Color = "red" | "green" | "blue" | "pink" | "purple" | "black";
