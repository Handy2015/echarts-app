import { EchartsAppDatasource } from './datasource';

class EchartsAppConfigCtrl { }
EchartsAppConfigCtrl.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

export {
  EchartsAppDatasource,
  EchartsAppConfigCtrl as ConfigCtrl
};
