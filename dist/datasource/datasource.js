'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, EchartsAppDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
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

      EchartsAppDatasource = function () {
        function EchartsAppDatasource() {
          _classCallCheck(this, EchartsAppDatasource);

          console.log('echarts app test');
        }

        /**
         * 获取服务器数据 sql
         * @param {object} options 
         */


        _createClass(EchartsAppDatasource, [{
          key: 'query',
          value: function query(options) {
            return ['SELECT * FROM list'];
          }
        }, {
          key: 'testDatasource',
          value: function testDatasource() {
            return false;
          }
        }, {
          key: 'annotationQuery',
          value: function annotationQuery(options) {
            return [];
          }
        }, {
          key: 'metricFindQuery',
          value: function metricFindQuery(options) {
            return [];
          }
        }]);

        return EchartsAppDatasource;
      }();

      _export('default', EchartsAppDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
