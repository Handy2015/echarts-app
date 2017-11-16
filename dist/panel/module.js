'use strict';

System.register(['app/plugins/sdk', '../js/EchartsOptionsUtils', '../css/echarts-app.css!'], function (_export, _context) {
  "use strict";

  var PanelCtrl, getChinaMapOption, EchartsAppPanelCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_jsEchartsOptionsUtils) {
      getChinaMapOption = _jsEchartsOptionsUtils.getChinaMapOption;
    }, function (_cssEchartsAppCss) {}],
    execute: function () {
      _export('PanelCtrl', EchartsAppPanelCtrl = function (_PanelCtrl) {
        _inherits(EchartsAppPanelCtrl, _PanelCtrl);

        function EchartsAppPanelCtrl($scope, $injector) {
          _classCallCheck(this, EchartsAppPanelCtrl);

          var _this = _possibleConstructorReturn(this, (EchartsAppPanelCtrl.__proto__ || Object.getPrototypeOf(EchartsAppPanelCtrl)).call(this, $scope, $injector));

          console.log(_this);
          return _this;
        }

        return EchartsAppPanelCtrl;
      }(PanelCtrl));

      EchartsAppPanelCtrl.templateUrl = 'panel/module.html';

      _export('PanelCtrl', EchartsAppPanelCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
