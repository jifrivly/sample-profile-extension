// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window, ExtensionContext, commands, Uri, workspace } from 'vscode';
import path from 'path';

import { infoStatusBarComponent } from './info-statusbar';
import { errorStatusBarComponent } from './error-statusbar';
import { getHTMLForJifriProfile } from './jifri-profile';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "jifri-sample-1" is now active!');

  // The code you place here will be executed every time your command is executed
  window.setStatusBarMessage('Jifri Sample Status!', 30000);

  infoStatusBarComponent.show();
  errorStatusBarComponent.show();

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = commands.registerCommand('jifri-sample-1.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    window.showInformationMessage('Hello World from sample1!');
  });

  const showGithubProfile = commands.registerCommand('jifri-sample-1.showGithubProfile', () => {
    const panel = window.createWebviewPanel(
      'githubProfile', // Identifies the type of the webview. Used internally
      'GitHub Profile', // Title of the panel displayed to the user
      window.activeTextEditor?.viewColumn || 1, // Editor column to show the new webview panel in
      {
        enableScripts: true // Enable scripts in the webview
      } // Webview options
    );

    // And set its HTML content
    panel.webview.html = getHTMLForJifriProfile();
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(showGithubProfile);
}

// This method is called when your extension is deactivated
export function deactivate() {}
