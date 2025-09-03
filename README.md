# Fold Toolbar

Adds **Fold All** / **Unfold All** to:
- **Edit** menu
- **Editor title bar** (top-right)
- **Status bar** (left)

## Commands
- `Fold All` → runs `editor.foldAll`
- `Unfold All` → runs `editor.unfoldAll`

## Install from VSIX
1. Download/build `fold-toolbar-*.vsix`
2. VS Code: **Extensions** → `…` menu → **Install from VSIX...**


## Install from source
# 1) Install vsce (once)
```
npm i -g @vscode/vsce
vsce package
code --install-extension fold-toolbar-1.0.0.vsix
```