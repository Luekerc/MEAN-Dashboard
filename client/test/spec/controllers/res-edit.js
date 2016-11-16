'use strict';

describe('Controller: ResEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResEditCtrl = $controller('ResEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResEditCtrl.awesomeThings.length).toBe(3);
  });
});
