(function (exc) {

    function dialogModule(scope) {
        scope.tst = 123;
    }

    exc.addModule('dialog', dialogModule);
    exc.addModule('dlg', dialogModule);

})(excellent);
