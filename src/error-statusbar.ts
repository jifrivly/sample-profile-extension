import { MarkdownString, StatusBarItem, window, StatusBarAlignment, ThemeColor } from "vscode";

const errorMessageHTML: MarkdownString = new MarkdownString(`
<h2>Error Status</h2>
<strong>Sample Error Tooltip</strong>
<br>
<a href="command:sample.command1">Button 1</a> | <a href="command:sample.command2">Button 2</a>
<hr>
<ul>
<li>Feature 1</li>
<li>Feature 2</li>
</ul>
`);
errorMessageHTML.isTrusted = true; // Allow command links to be trusted
errorMessageHTML.supportHtml = true; // Enable HTML rendering

const errorStatus: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 1);
errorStatus.text = 'Jifri Sample Extension Error';
errorStatus.backgroundColor = new ThemeColor('statusBarItem.errorBackground');
errorStatus.tooltip = errorMessageHTML;

export { errorStatus as errorStatusBarComponent };