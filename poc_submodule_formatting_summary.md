# POC Submodule Formatting Summary

- Use `formatter-common-config` as the shared formatting submodule.
- Keep Biome config in `config/biome.json`.
- Run `npm run setup` in the consuming repo to:
  - init/update the submodule
  - install dependencies
  - generate `.vscode/settings.json`
  - generate `.vscode/extensions.json`
- Use `biome format --write .` for formatting.
- Save-on-format in VS Code works when the Biome extension is installed and the workspace settings are created.
