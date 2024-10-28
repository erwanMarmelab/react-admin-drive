export type File = {
  id: number;
  name: string;
  parentId: string;
  type: FileType;
  color: Color;
  fileReference: number;
};

export type FileType =
  | "Folder"
  | "Text"
  | "Image"
  | "Video"
  | "Phonic"
  | "Sheet";
export type Color = "red" | "green" | "blue" | "pink" | "purple";
