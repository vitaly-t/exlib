(function (exc) {

    function resizableController(ctrl) {
        ctrl.setDirection = function (/*rd*/) {
            // implementing it here
        };
    }

    function resizableXController(ctrl) {
        ctrl.onInit = function () {
            var c = ctrl.extend('rmd.resizable');
            c.setDirection({horizontal: true, vertical: false});
        };
    }

    function resizableYController(ctrl) {
        ctrl.onInit = function () {
            var c = ctrl.extend('rmd.resizable');
            c.setDirection({horizontal: false, vertical: true});
        };
    }

    function movableController(/*ctrl*/) {

    }

    function draggableController(/*ctrl*/) {

    }

    function draggableDestController(/*ctrl*/) {

    }

    function remedyModule(scope) {
        scope.resizable = resizableController;
        scope.resizable.x = resizableXController;
        scope.resizable.y = resizableYController;
        scope.movable = movableController;

        scope.draggable = draggableController;
        scope.drag = {
            dest: draggableDestController
        };
    }

    exc.addModule('remedy', remedyModule);
    exc.addModule('rmd', remedyModule);

})(excellent);
