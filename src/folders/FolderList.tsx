import { InfiniteList } from "react-admin";

import { BackButton } from "./BackButton";
import { FolderDatagrid } from "./FolderDatagrid";

export const FolderList = () => (
  <InfiniteList
    sort={{ field: "type", order: "ASC" }}
    filterDefaultValues={{ parentId: 0 }}
  >
    <BackButton />
    <FolderDatagrid />
  </InfiniteList>
);
