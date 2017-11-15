/**
 * 数据交互插件
 * @author JiM_Hao
 */
export default class EchartsAppDatasource {
  constructor() {
    console.log('echarts app test')
  }

  /**
   * 获取服务器数据 sql
   * @param {object} options 
   */
  query(options) {
    return [
      'SELECT * FROM posts'
    ];
  }
  /**
   * used by datasource configuration page to make sure the connection is working
   * 通过数据源配置页面，用来确保连接工作
   */
  testDatasource() {
    return false;
  }
  /**
   * used by dashboards to get annotations
   * @param {object} options 
   */
  annotationQuery(options) {
    return [];
  }
  /**
   * used by query editor to get metric suggestions
   * 查询编辑器用于获取度量建议
   * @param {object} options 
   */
  metricFindQuery(options) {
    return [];
  }
}