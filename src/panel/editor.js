/**
 * 编辑页面模块
 *  @author JiM_Hao 2017-11-17
 */

class triggerPanelEditor {
  constructor($scope, $injector, $element, datasourceSrv, templateSrv, contextSrv, dashboardSrv) {
    $scope.editor = this;
    console.log($scope);
  }
}

triggerPanelEditor.templateUrl = './editor.html';
