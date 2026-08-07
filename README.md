# POC Submodule Formatting Summary

Use `formatter-common-config` as the shared formatting source for JavaScript repos.

## What lives where

- `config/biome.json` is the shared Biome config in the submodule.
- Root `biome.json` is the file Biome actually reads in this repo.
- `config/setup.mjs` bootstraps the consuming repo.
- `.vscode/settings.json` and `.vscode/extensions.json` are generated for save-on-format support.

## If you just cloned the project

1. Run:
   ```bash
   npm run setup
   ```
2. That will:
   - restore `.gitmodules`, `config/`, and root `biome.json` if missing
   - initialize/update the `formatter-common-config` submodule
   - install dependencies
   - create `.vscode/settings.json`
   - create `.vscode/extensions.json`
3. Open the repo in VS Code and make sure the Biome extension is installed.
4. Edit a JSON file and save it. Biome should format it automatically.

## If you want to update formatting from the mother repo

1. Update `formatter-common-config` first.
2. Push the submodule change.
3. In this repo, run:
   ```bash
   npm run setup
   ```
4. Commit the updated submodule pointer in this repo.

## If you only want to refresh this repo locally

- Run `npm run setup` again.
- This is safe even if `config/` or `biome.json` was deleted locally.

## If formatting still does not happen on save

- Check that VS Code is using the Biome extension.
- Check that `.vscode/settings.json` exists.
- Check that the file is JSON/JSONC.
- Use `npm run format` if you want to format from the terminal instead.
