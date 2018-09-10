(function (exc) {
    'use strict';

    function resizableController(ctrl) {
        notImplemented();

        ctrl.setDirection = function (/*rd*/) {
            // implementing it here
        };
    }

    function resizableXController(ctrl) {
        notImplemented();

        ctrl.onInit = function () {
            var c = ctrl.extend('rmd.resizable');
            c.setDirection({horizontal: true, vertical: false});
        };
    }

    function resizableYController(ctrl) {
        notImplemented();

        ctrl.onInit = function () {
            var c = ctrl.extend('rmd.resizable');
            c.setDirection({horizontal: false, vertical: true});
        };
    }

    function movableController(ctrl) {
        var p1 = 0,
            p2 = 0,
            p3 = 0,
            p4 = 0;
        var t = ctrl.node; // target element to be moved (itself by default)

        // changes the target element to be moved;
        // (typically a parent/container element)
        ctrl.setTarget = function (target) {
            t = target;
        };

        t.onmousedown = function (e) {
            ctrl.node.style.cursor = 'move'; // or you can use 'grabbing', if you like
            t.style.position = 'absolute';
            t.style.opacity = '0.6';
            e = e || window.event;
            e.preventDefault();
            p3 = e.clientX;
            p4 = e.clientY;
            document.onmouseup = onMouseUp;
            document.onmousemove = onMouseMove;
        };

        function onMouseMove(e) {
            e = e || window.event;
            e.preventDefault();
            p1 = p3 - e.clientX;
            p2 = p4 - e.clientY;
            p3 = e.clientX;
            p4 = e.clientY;
            t.style.top = (t.offsetTop - p2) + 'px';
            t.style.left = (t.offsetLeft - p1) + 'px';
        }

        function onMouseUp() {
            ctrl.node.style.cursor = null;
            t.style.opacity = null;
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function draggableController(/*ctrl*/) {
        notImplemented();
    }

    function draggableDestController(/*ctrl*/) {
        notImplemented();
    }

    function notImplemented(name) {
        throw new Error('Controller ' + name + ' not implemented yet.');
    }

    function rmdModule(scope) {
        scope.resizable = resizableController;
        scope.resizable.x = resizableXController;
        scope.resizable.y = resizableYController;
        scope.movable = movableController;

        scope.draggable = draggableController;
        scope.drag = {
            dest: draggableDestController
        };
    }

    exc.addModule('rmd', rmdModule);

})(excellent);
