'use strict';

System.register(['app/plugins/sdk', './editor', 'jquery', '../js/EchartsOptionsUtils', '../css/echarts-app.css!'], function (_export, _context) {
  "use strict";

  var PanelCtrl, loadPluginCss, triggerPanelEditor, $, getChinaMapOption, getTestOption, _createClass, Echarts, panelDefaults, EchartsAppPanelCtrl;

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
      loadPluginCss = _appPluginsSdk.loadPluginCss;
    }, function (_editor) {
      triggerPanelEditor = _editor.triggerPanelEditor;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_jsEchartsOptionsUtils) {
      getChinaMapOption = _jsEchartsOptionsUtils.getChinaMapOption;
      getTestOption = _jsEchartsOptionsUtils.getTestOption;
    }, function (_cssEchartsAppCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      Echarts = void 0;

      System.amdRequire(["plugins/grafana-echarts-app/echarts/npm/echarts.min.js"], function (echarts) {
        Echarts = echarts;
      });

      loadPluginCss({
        dark: 'plugins/grafana-echarts-app/css/dark.css',
        light: 'plugins/grafana-echarts-app/css/light.css'
      });

      panelDefaults = {
        datasource: null,
        scroll: true,
        fontSize: '100%'
      };

      _export('PanelCtrl', EchartsAppPanelCtrl = function (_PanelCtrl) {
        _inherits(EchartsAppPanelCtrl, _PanelCtrl);

        function EchartsAppPanelCtrl($scope, $injector, $element, datasourceSrv, templateSrv, contextSrv, dashboardSrv) {
          _classCallCheck(this, EchartsAppPanelCtrl);

          var _this = _possibleConstructorReturn(this, (EchartsAppPanelCtrl.__proto__ || Object.getPrototypeOf(EchartsAppPanelCtrl)).call(this, $scope, $injector));

          // 私有化
          _this.datasourceSrv = datasourceSrv;
          _this.templateSrv = templateSrv;
          _this.contextSrv = contextSrv;
          _this.dashboardSrv = dashboardSrv;
          // 页面索引
          _this.pageIndex = 0;
          // 数据列表
          _this.triggerList = [];
          // 查询类型
          _this.queryType = 'click';
          _this.currentTriggersPage = [];
          // 合并对象
          _.defaults(_this.panel, _.cloneDeep(panelDefaults));

          console.log(_this);
          console.log('面板初始化');
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('refresh', _this.onRefresh.bind(_this));
          return _this;
        }

        /**
         * 编辑时触发函数
         */


        _createClass(EchartsAppPanelCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', triggerPanelEditor, 2);
          }
        }, {
          key: 'onRefresh',
          value: function onRefresh() {
            var _this2 = this;

            // 如果有一个面板全屏，那么忽略此操作
            if (this.otherPanelInFullscreenMode()) {
              return;
            }

            // 清除错误，准备开始加载数据
            delete this.error;
            this.loading = true;
            console.log('数据初始化');

            return this.refreshData().then(function (trigger) {
              _this2.loading = false;
              _this2.triggerList = trigger.list;
              _this2.queryType = trigger.type;
              _this2.renderPanel();
            });
          }
        }, {
          key: 'refreshData',
          value: function refreshData() {
            var _this3 = this;

            console.log(this.datasourceSrv);
            return this.datasourceSrv.get(this.panel.datasource).then(function (datasource) {
              return _this3.getTriggers();
            });
          }
        }, {
          key: 'getTriggers',
          value: function getTriggers() {
            return {
              list: [{
                "parentarea": "北京市",
                "click": 897
              }, {
                "parentarea": "海外",
                "click": 98
              }, {
                "parentarea": "江苏省",
                "click": 200
              }, {
                "parentarea": "辽宁省",
                "click": 340
              }, {
                "parentarea": "吉林省",
                "click": 120
              }],
              type: 'click'
            };
          }
        }, {
          key: 'renderPanel',
          value: function renderPanel() {
            // let option = getChinaMapOption(this.triggerList, this.queryType);
            var option = getTestOption();
            var chart = Echarts.init($('.triggers-panel-charts')[0]);
            chart.setOption(option, true);
          }
        }]);

        return EchartsAppPanelCtrl;
      }(PanelCtrl));

      EchartsAppPanelCtrl.templateUrl = 'panel/module.html';

      _export('PanelCtrl', EchartsAppPanelCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
