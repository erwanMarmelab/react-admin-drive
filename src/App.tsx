import { Admin, Resource } from "react-admin";
import { Layout } from "./layout/Layout";
import { dataProvider } from "./dataProvider/dataProvider";
import folders from "./folders";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="folders" {...folders} />
  </Admin>
);
