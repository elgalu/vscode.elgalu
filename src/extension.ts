'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    var disposable: vscode.Disposable;

    interface ActiveEditorMoveArguments {
        to?: string;
        by?: string;
        value?: number;
    }

    const args: ActiveEditorMoveArguments = {
        to: 'left'
    };

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "elgalu" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    disposable = vscode.commands.registerCommand('elgalu.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hola querido amigo!');
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.moveActiveTabLeft', () => {
        vscode.commands.executeCommand('moveActiveEditor', { by: 'tab', to: 'left' });
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.moveActiveTabRight', () => {
        vscode.commands.executeCommand('moveActiveEditor', { by: 'tab', to: 'right' });
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.upMany', () => {
        for (var i = 0; i < 7; i++) {
            vscode.commands.executeCommand('cursorUp');
        }
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.downMany', () => {
        for (var i = 0; i < 7; i++) {
            vscode.commands.executeCommand('cursorDown');
        }
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.leftMany', () => {
        for (var i = 0; i < 12; i++) {
            vscode.commands.executeCommand('cursorLeft');
        }
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.rightMany', () => {
        for (var i = 0; i < 12; i++) {
            vscode.commands.executeCommand('cursorRight');
        }
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.leftSelectMany', () => {
        for (var i = 0; i < 10; i++) {
            vscode.commands.executeCommand('cursorLeftSelect');
        }
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('elgalu.rightSelectMany', () => {
        for (var i = 0; i < 10; i++) {
            vscode.commands.executeCommand('cursorRightSelect');
        }
    });
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}