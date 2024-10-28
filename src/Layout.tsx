import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout sx={{
    "& .show-page:has(#fullpage)": {
      height: "100%",
    },

  }}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
