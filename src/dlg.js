(function (exc) {
    'use strict';

    function containerController(ctrl) {
        ctrl.onInit = function () {
            var c = ctrl.find('dlg.header');
            if (c.length > 1) {
                throw new Error('Cannot have more than one header in a dialog.');
            }
            if (c.length) {
                c[0].setContainer(ctrl.node);
            }
        };
    }

    function headerController(ctrl) {
        ctrl.setContainer = function (/*e*/) {
            // sets target for the movable element
        };
    }

    function dlgModule(scope) {
        scope.container = containerController;
        scope.header = headerController;
    }

    exc.addModule('dlg', dlgModule);

})(excellent);
