import {ERoot} from 'excellent.js';
import {movable} from './movable';
import {resizable, resizableX, resizableY} from './resizable';

declare const excellent: ERoot;

excellent.addModule('rdm', scope => {
    scope.movable = movable;

    scope.resizable = resizable;
    scope.resizable.x = resizableX;
    scope.resizable.y = resizableY;
});
