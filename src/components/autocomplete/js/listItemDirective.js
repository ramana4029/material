(function () {
  'use strict';
  angular
      .module('material.components.autocomplete')
      .directive('mdListItem', MdListItem);

  function MdListItem ($compile, $mdUtil) {
    return {
      require: '^mdAutocomplete',
      terminal: true,
      link: link,
      scope: false
    };
    function link (scope, element, attr, ctrl) {
      var newScope = ctrl.parent.$new(false, ctrl.parent);
      var itemName = ctrl.scope.$eval(attr.mdListItem);
      newScope[itemName] = scope.item;
      $compile(element.contents())(newScope);
      element.attr({ 'role': 'option', 'id': 'item_' + $mdUtil.nextUid() });
    }
  }
})();
