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
        const {fontFamily} = style;

        if (fontFamily) {
            style.fontFamily = '';
        } else {
            style.fontFamily = 'Beorc Gothic';
        }
    }
  }
};
