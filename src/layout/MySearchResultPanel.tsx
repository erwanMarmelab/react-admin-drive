import { useRedirect } from "react-admin";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { highlightSearchTerm } from "highlight-search-term";

import { iconRender } from "../folders/Icon";
import type { File } from "../types";
import { useEffect } from "react";

export const MySearchResultPanel = ({
  data,
  query,
  onClose,
}: {
  data: File[] | undefined;
  query: string;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const redirect = useRedirect();
  useEffect(() => {
    highlightSearchTerm({
      search: query,
      selector: ".highlight",
    });
  }, [data, query]);

  if (!data || data.length == 0) {
    return (
      <Typography variant="body2" align="center" color="text.disabled" m={6}>
        No results found
      </Typography>
    );
  }

  const handleClick = (file: File) => {
    if (file.type === "Folder") {
      navigate({
        pathname: "/folders",
        search: `?filter=${JSON.stringify({ parentId: file.id })}`,
      });
    } else if (file.type === "Text" || file.type === "Sheet") {
      redirect("edit", "folders", file.id);
    } else {
      redirect("show", "folders", file.id);
    }
    onClose();
  };

  // TODO: make it beau
  return (
    <div>
      {data.map((file) => {
        const Icon = () => iconRender(file);
        return (
          <Stack
            key={file.id}
            direction="row"
            alignItems="center"
            gap={1.5}
            sx={{
              cursor: "pointer",
              "& ::highlight(search)": {
                backgroundColor: "yellow",
                color: "black",
              },
              "&:hover": {
                background: "rgba(0, 0, 0, 0.1)",
              },
            }}
            onClick={() => handleClick(file)}
          >
            <Icon />
            <Typography variant="subtitle1" className="highlight">
              {file.name}
            </Typography>
          </Stack>
        );
      })}
    </div>
  );
};
