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

export type Text = {
  id: number;
  content: string;
};

export type Image = {
  id: number;
  url: string;
};

export type Video = {
  id: number;
  url: string;
  type: "mp4" | "webm" | "ogg";
};

export type Phonic = {
  id: number;
  url: string;
  type: "mp3" | "wav" | "ogg";
};

export type PDF = {
  id: number;
  url: string;
};

export type Sheet = {
  id: number;
  content: string;
};

export type ReferencedFile = Text | Image | Video | Phonic | PDF | Sheet;