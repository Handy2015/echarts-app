/**
 * Grafana-Echarts
 * Echarts plugin for Grafana.
 * Trigger panel.
 * 
 */

import { PanelCtrl } from 'app/plugins/sdk';

import { getChinaMapOption } from '../js/EchartsOptionsUtils'

import '../css/echarts-app.css!'

class EchartsAppPanelCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    console.log(this);
  }

}
EchartsAppPanelCtrl.templateUrl = 'panel/module.html';

export {
  EchartsAppPanelCtrl as PanelCtrl
};
