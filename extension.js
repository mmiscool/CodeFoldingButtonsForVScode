// ES6, no TypeScript, no React.
const vscode = require('vscode');

function activate(context) {
  // Commands that simply call the built-in VS Code commands
  const foldAll = vscode.commands.registerCommand('foldToolbar.foldAll', async () => {
    await vscode.commands.executeCommand('editor.foldAll');
  });

  const unfoldAll = vscode.commands.registerCommand('foldToolbar.unfoldAll', async () => {
    await vscode.commands.executeCommand('editor.unfoldAll');
  });

  context.subscriptions.push(foldAll, unfoldAll);

  // Editor Title Bar buttons are contributed via package.json "menus.editor/title"
  // Below: Status Bar buttons (acts like a global mini-toolbar)
  const foldItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10);
  foldItem.text = '$(collapse-all) Fold All';
  foldItem.tooltip = 'Fold all regions in the active editor';
  foldItem.command = 'foldToolbar.foldAll';
  foldItem.name = 'Fold All';
  foldItem.show();

  const unfoldItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 9);
  unfoldItem.text = '$(expand-all) Unfold All';
  unfoldItem.tooltip = 'Unfold all regions in the active editor';
  unfoldItem.command = 'foldToolbar.unfoldAll';
  unfoldItem.name = 'Unfold All';
  unfoldItem.show();

  context.subscriptions.push(foldItem, unfoldItem);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};