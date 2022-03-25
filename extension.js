// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const fs = require('fs')
const config = require('./src/index')
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello-vue3" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hello-world.helloWorld', function (args) {
		// The code you place here will be executed every time your command is executed
		console.log('args ===>', args)
		useExtension(args).then(() => {
			vscode.window.showInformationMessage('开发vscode插件')
		}).catch(error => {
			new Error(error)
		})
		// Display a message box to the user
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

const useExtension = args => {
	return new Promise((resolve, reject) => {
		try {
			const path = vscode.workspace.rootPath
			if(!path){
				vscode.window.showErrorMessage('请先打开一个工作区')
				reject('')
				return 
			}
			const selectPath = args.path
			const indexjsPath = `${selectPath}/index-${new Date().getTime()}.vue`

			if(!fs.existsSync(indexjsPath)){
				fs.writeFileSync(indexjsPath, config.myTemplate)
			}
			resolve('')
		} catch (error) {
			reject(new Error(error))
		}
	})
}


module.exports = {
	activate,
	deactivate
}
