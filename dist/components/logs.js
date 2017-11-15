'use strict';

System.register(['app/core/config', './clippy.css!', './clippy'], function (_export, _context) {
  "use strict";

  var config, LogsPageCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_clippyCss) {}, function (_clippy) {}],
    execute: function () {
      _export('LogsPageCtrl', LogsPageCtrl = function LogsPageCtrl() {
        _classCallCheck(this, LogsPageCtrl);

        this.name = config.bootData.user.name;
        window.clippy.load('Clippy', function (agent) {
          agent.show();
          agent.moveTo(300, 300);
          agent.play('GetAttention');
          agent.speak("It looks like you're writing a plugin \n\n Would you like help?");
          agent.speak("Feel free to pass by our irc channel #grafana @ freenode");
          agent.animate();

          setInterval(function () {
            agent.animate();
          }, 30000);
        });
      });

      _export('LogsPageCtrl', LogsPageCtrl);

      LogsPageCtrl.templateUrl = 'components/logs.html';
    }
  };
});
//# sourceMappingURL=logs.js.map
