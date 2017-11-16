'use strict';

System.register(['./datasource'], function (_export, _context) {
  "use strict";

  var EchartsAppDatasource, EchartsAppConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      EchartsAppDatasource = _datasource.EchartsAppDatasource;
    }],
    execute: function () {
      _export('ConfigCtrl', EchartsAppConfigCtrl = function EchartsAppConfigCtrl() {
        _classCallCheck(this, EchartsAppConfigCtrl);
      });

      EchartsAppConfigCtrl.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

      _export('Datasource', EchartsAppDatasource);

      _export('ConfigCtrl', EchartsAppConfigCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
