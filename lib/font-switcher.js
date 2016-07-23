'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'font-switcher:toggle': () => this.toggle(),
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  toggle() {
    const textEditor = atom.workspace.getActiveTextEditor();
    if (textEditor) {
        const {style} = textEditor.editorElement;
        const {fontFamily, fontSize} = style;

        if (fontFamily || fontSize) {
            style.fontFamily = '';
            style.fontSize = '';
        } else {
            style.fontFamily = 'Beorc Gothic';
            style.fontSize = '2em';
        }
    }
  }
};
