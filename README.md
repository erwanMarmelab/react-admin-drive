# react-admin-drive

## To Do

- [x] Display "folders" and "files"
- [x] Navigate between folders
- [x] Edit folder/files names and folders colors
- [x] Add a image viewer
- [x] Add a mp3 player
- [x] Add a mp4 player
- [x] Add a doc editor (maybe with ra-markdown)
- [x] Add a PDF viewer
- [ ] Add a sheet editor (maybe with ra-datagrid-ag)
- [x] Add a global search (algolia like)
- [ ] Update layout ([MUI theme template](https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=templates-cta#populars))

## Nice To Have

- [ ] Add breadcrumbs
- [ ] Download / Import
- [ ] Drop to import
- [ ] Change fakerest for a real supabase db
- [ ] Share file access

## Installation

Install the application dependencies by running:

```sh
yarn
```

## Development

Start the application in development mode by running:

```sh
yarn dev
```

## Production

Build the application in production mode by running:

```sh
yarn build
```

## DataProvider

The included data provider use [FakeREST](https://github.com/marmelab/fakerest) to simulate a backend.
You'll find a `data.json` file in the `src` directory that includes some fake data for testing purposes.

It includes two resources, posts and comments.
Posts have the following properties: `id`, `title` and `content`.
Comments have the following properties: `id`, `post_id` and `content`.

## Tests

You can run the included tests with the following command:

```sh
npm run test
# or
yarn run test
```
