(function (exc) {
    'use strict';

    function dialogModule(scope) {
        scope.tst = 123;
    }

    exc.addModule('dlg', dialogModule);

})(excellent);
