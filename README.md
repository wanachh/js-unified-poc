# JS Unified POC

This repo uses `formatter-common-config` as a shared formatting submodule for Biome.

## What lives where

- `config/biome.shared.json` is the shared Biome config in the submodule.
- Root `biome.json` is the file Biome actually reads in this repo.
- `config/setup.mjs` bootstraps the consuming repo.
- `.vscode/settings.json` and `.vscode/extensions.json` are generated for save-on-format support.

## Fresh clone flow

1. Clone this repo.
2. Run:
   ```bash
   npm run setup
   ```
3. That will:
   - restore `.gitmodules`, `config/`, and root `biome.json` if missing
   - initialize/update the `formatter-common-config` submodule
   - install dependencies
   - create `.vscode/settings.json`
   - create `.vscode/extensions.json`
4. Open the repo in VS Code and make sure the Biome extension is installed.
5. Edit a JSON file and save it. Biome should format it automatically.

## Updating formatting from the mother repo

1. Update `formatter-common-config` first.
2. Push the submodule change.
3. In this repo, run:
   ```bash
   npm run setup
   ```
4. Commit the updated submodule pointer in this repo.

## Local refresh

- Run `npm run setup` again.
- This is safe even if `config/` or `biome.json` was deleted locally.

## If save-on-format still does not work

- Check that VS Code is using the Biome extension.
- Check that `.vscode/settings.json` exists.
- Check that the file is JSON/JSONC.
- Use `npm run format` if you want terminal formatting instead.
