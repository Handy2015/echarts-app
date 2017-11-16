import { EchartsAppDatasource } from './datasource';

class EchartsAppConfigCtrl { }
EchartsAppConfigCtrl.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

export {
  EchartsAppDatasource as Datasource,
  EchartsAppConfigCtrl as ConfigCtrl
};
