import {ERoot} from 'excellent.js';
import {movable} from './movable';
import {resizable, resizableX, resizableY} from './resizable';
import {draggable} from './draggable';

declare const excellent: ERoot;

excellent.addModule('rmd', scope => {
    scope.draggable = draggable;
    scope.movable = movable;
    scope.resizable = resizable;
    scope.resizable.x = resizableX;
    scope.resizable.y = resizableY;
});
