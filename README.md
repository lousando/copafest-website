# Copafest Website 🎉

> Ham Fest sponsored by Maricopa ARA

## Quickstart 🚀

```shell
# create .env file
cp .env.example .env
# install dependencies
pnpm i
# start the project in dev mode
pnpm watch
```

## Project Structure 🛠️

Inside of the Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
|:------------------------| :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn watch`            | Starts local dev server at `localhost:4321`      |
| `yarn build`            | Build your production site to `./dist/`          |
| `yarn preview`          | Preview your build locally, before deploying     |
| `yarn astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`  | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
