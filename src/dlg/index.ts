import {ERoot} from 'excellent.js';

declare const excellent: ERoot;

function dialogModule(scope) {
}

excellent.addModule('dialog', dialogModule);
excellent.addModule('dlg', dialogModule);
