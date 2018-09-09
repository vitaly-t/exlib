import {ERoot} from 'excellent.js';
import {movable} from './movable';
import {resizable, resizableX, resizableY} from './resizable';
import {draggable, draggableDest} from './draggable';

declare const excellent: ERoot;

function remedyModule(scope) {
    scope.resizable = resizable;
    scope.resizable.x = resizableX;
    scope.resizable.y = resizableY;
    scope.movable = movable;

    scope.draggable = draggable;
    scope.drag = {
        dest: draggableDest
    };
}

excellent.addModule('rmd', remedyModule);
excellent.addModule('remedy', remedyModule);
