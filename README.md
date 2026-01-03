# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---

### Tina CMS (development only)

**Tina CMS is available for local development only.** The admin UI can be run locally with the dev server (`npm run dev`) and Tina is installed as a `devDependency` so it is not included in production builds. To keep the admin local:

- **Do not** set `NEXT_PUBLIC_TINA_CLIENT_ID` or `TINA_TOKEN` in production. Without credentials, the admin will be read-only or unavailable.
- Avoid running any `tinacms build` steps in CI or production build pipelines.
- If you want extra safety, remove or ignore `static/admin` from your deployment artifacts or add a CI step to delete it before deploy.

This ensures editing capabilities are only available on developer machines where Tina is explicitly run.

