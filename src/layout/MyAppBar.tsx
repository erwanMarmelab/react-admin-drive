import React, { useState } from "react";
import { AppBar, TitlePortal } from "react-admin";
import {
  useSearchController,
  Search,
  SearchInput,
  SearchResultContextProvider,
  SearchResultsPanel,
  SearchHistoryPanel,
} from "@react-admin/ra-search";
import { Dialog, Box, Typography } from "@mui/material";

export const MyAppBar = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [isResult, setIsResult] = useState(false);
  const { searchData, query, doSearch } = useSearchController({
    queryOptions: {
      onSuccess: () => setIsResult(true),
      onError: () => setIsResult(true),
    },
  });
  const contextValue = React.useMemo(
    () => ({
      ...searchData,
      onClose: () => undefined,
    }),
    [searchData],
  );
  const handleChange = (event: any) => {
    console.log(event?.target?.value);
    setIsResult(false);
    const query = event.target
      ? event.target.value
      : (event as unknown as string);
    doSearch(query);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    e.target.blur();
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e: any) => {
    e.preventDefault();
    setOpen(false);
    query && !history.includes(query) && setHistory([query, ...history]);
  };

  return (
    <AppBar>
      <TitlePortal />
      <Search
        value={query}
        onChange={handleChange}
        withKeyboardShortcut
        isFocused={open}
        onFocus={handleOpen}
        onOpen={handleOpen}
        onClose={handleClose}
      />
      <Dialog open={open} onClose={handleClose}>
        <Box m={1}>
          <SearchInput
            onChange={handleChange}
            value={query}
            autoFocus
            fullWidth
          />
          {query && isResult ? (
            searchData.error ? (
              <Typography color="error" variant="body2">
                Server communication error
                {searchData.error.message ? `: ${searchData.error.message}` : ""}
              </Typography>
            ) : (
              <SearchResultContextProvider value={contextValue}>
                {/* TODO: make my own panel */}
                <SearchResultsPanel disablePadding onClick={handleClose} />
                {/* <p>heheheeeeeeee:
                  {JSON.stringify(searchData.data)}
                </p> */}
              </SearchResultContextProvider>
            )
          ) : history.length > 0 ? (
            <SearchHistoryPanel history={history} onSelect={doSearch} />
          ) : (
            <Typography
              variant="body2"
              align="center"
              color="text.disabled"
              m={6}
            >
              No recent searches
            </Typography>
          )}
        </Box>
      </Dialog>
    </AppBar>
  );
};
