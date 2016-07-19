'use babel';

import FontSwitcherView from './font-switcher-view';
import { CompositeDisposable } from 'atom';

export default {

  fontSwitcherView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.fontSwitcherView = new FontSwitcherView(state.fontSwitcherViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.fontSwitcherView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'font-switcher:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.fontSwitcherView.destroy();
  },

  serialize() {
    return {
      fontSwitcherViewState: this.fontSwitcherView.serialize()
    };
  },

  toggle() {
    console.log('FontSwitcher was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
