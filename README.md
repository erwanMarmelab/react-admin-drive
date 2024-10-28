# react-admin-drive

## To Do

- [x] Display "folders" and "files"
- [x] Navigate between folders
- [x] Edit folder/files names and folders colors
- [ ] Add a image viewer
- [ ] Add a mp3 player
- [ ] Add a mp4 player
- [ ] Add a doc editor (maybe with ra-markdown)
- [ ] Add a PDF viewer
- [ ] Add a sheet editor (maybe with ra-datagrid-ag)
- [ ] Add a global search (algolia like)
- [ ] Add breadcrumbs
- [ ] Download / Import
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
