import { MarkdownString, StatusBarItem, window, StatusBarAlignment, ThemeColor } from "vscode";

const infoPopupHTML: MarkdownString = new MarkdownString(`
<h3>Info Status</h3>
<strong>Jifri Profile</strong>
<br>
<a href="command:jifri-sample-1.showGithubProfile">Github Profile</a> | <a href="command:sample.command2">Button 2</a>
<hr>
<ul>
<li>Feature 1</li>
<li>Feature 2</li>
</ul>
`);
infoPopupHTML.isTrusted = true; // Allow command links to be trusted
infoPopupHTML.supportHtml = true; // Enable HTML rendering

const infoStatus: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 1);
infoStatus.text = 'Sample Extension';
infoStatus.color = 'white';
infoStatus.backgroundColor = new ThemeColor('statusBarItem.prominentBackground');
infoStatus.tooltip = infoPopupHTML;
// infoStatus.command = '';

export { infoStatus as infoStatusBarComponent };