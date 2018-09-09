import {EController} from 'excellent.js';

type ResizeDirection = {
    vertical?: boolean;
    horizontal?: boolean;
};

interface ResizableController extends EController {
    setDirection: (rd: ResizeDirection) => void
}

export function resizable(ctrl: ResizableController) {
    ctrl.setDirection = function (rd: ResizeDirection) {
        // implementing it here
    };
}

export function resizableX(ctrl: EController) {
    ctrl.onInit = function () {
        const c = <ResizableController>ctrl.extend('rmd.resizable');
        c.setDirection({horizontal: true, vertical: false});
    };
}

export function resizableY(ctrl: EController) {
    ctrl.onInit = function () {
        const c = <ResizableController>ctrl.extend('rmd.resizable');
        c.setDirection({horizontal: false, vertical: true});
    };
}
