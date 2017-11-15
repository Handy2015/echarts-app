import { PanelCtrl } from 'app/plugins/sdk';
import '../css/echarts-app.css!'

class EchartsAppPanelCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
  }
}
EchartsAppPanelCtrl.template = '<h2 class="echarts-app-heading">echarts app!</h2>';

export {
  EchartsAppPanelCtrl as PanelCtrl
};