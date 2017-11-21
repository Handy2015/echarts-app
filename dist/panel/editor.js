'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var triggerPanelEditor;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      triggerPanelEditor = function triggerPanelEditor($scope, $injector, $element, datasourceSrv, templateSrv, contextSrv, dashboardSrv) {
        _classCallCheck(this, triggerPanelEditor);

        $scope.editor = this;
        console.log($scope);
      };

      triggerPanelEditor.templateUrl = './editor.html';
    }
  };
});
//# sourceMappingURL=editor.js.map
