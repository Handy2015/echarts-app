/**
 * Grafana-Echarts
 * Echarts plugin for Grafana.
 * Trigger panel.
 * @author JiM_Hao 2017-11-17
 */

import { PanelCtrl } from 'app/plugins/sdk';
import { loadPluginCss } from 'app/plugins/sdk';
import { triggerPanelEditor } from './editor';
import $ from 'jquery';

import { getChinaMapOption, getTestOption } from '../js/EchartsOptionsUtils'

import '../css/echarts-app.css!'

let Echarts;
System.amdRequire(["plugins/grafana-echarts-app/echarts/npm/echarts.min.js"], (echarts) => {
  Echarts = echarts;
});

loadPluginCss({
  dark: 'plugins/grafana-echarts-app/css/dark.css',
  light: 'plugins/grafana-echarts-app/css/light.css'
});

var panelDefaults = {
  datasource: null,
  scroll: true,
  fontSize: '100%'
}

class EchartsAppPanelCtrl extends PanelCtrl {
  constructor($scope, $injector, $element, datasourceSrv, templateSrv, contextSrv, dashboardSrv) {
    super($scope, $injector);
    // 私有化
    this.datasourceSrv = datasourceSrv;
    this.templateSrv = templateSrv;
    this.contextSrv = contextSrv;
    this.dashboardSrv = dashboardSrv;
    // 页面索引
    this.pageIndex = 0;
    // 数据列表
    this.triggerList = [];
    // 查询类型
    this.queryType = 'click';
    this.currentTriggersPage = [];
    // 合并对象
    _.defaults(this.panel, _.cloneDeep(panelDefaults));

    console.log(this);
    console.log('面板初始化');
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('refresh', this.onRefresh.bind(this));
  }

  /**
   * 编辑时触发函数
   */
  onInitEditMode() {
    this.addEditorTab('Options', triggerPanelEditor, 2);
  }

  /**
   * 刷新触发函数
   */
  onRefresh () {
    // 如果有一个面板全屏，那么忽略此操作
    if (this.otherPanelInFullscreenMode()) { return; }
    
    // 清除错误，准备开始加载数据
    delete this.error;
    this.loading = true;
    console.log('数据初始化');

    return this.refreshData()
      .then(trigger => {
        this.loading = false;
        this.triggerList = trigger.list;
        this.queryType = trigger.type;
        this.renderPanel();
      })
  }

  refreshData () {
    console.log(this.datasourceSrv);
    return this.datasourceSrv.get(this.panel.datasource)
      .then(datasource => {
        return this.getTriggers();
      });
  }

  getTriggers () {
    return {
      list: [
        {
          "parentarea": "北京市",
          "click": 897
        },
        {
          "parentarea": "海外",
          "click": 98
        },
        {
          "parentarea": "江苏省",
          "click": 200
        },
        {
          "parentarea": "辽宁省",
          "click": 340
        },
        {
          "parentarea": "吉林省",
          "click": 120
        }
      ],
      type: 'click'
    }
  }

  renderPanel () {
    // let option = getChinaMapOption(this.triggerList, this.queryType);
    let option = getTestOption();
    let chart = Echarts.init($('.triggers-panel-charts')[0]);
    chart.setOption(option, true);
  }
}
EchartsAppPanelCtrl.templateUrl = 'panel/module.html';

export {
  EchartsAppPanelCtrl as PanelCtrl
};
