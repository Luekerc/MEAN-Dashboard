'use strict';

describe('Controller: ResAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResAddCtrl = $controller('ResAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResAddCtrl.awesomeThings.length).toBe(3);
  });
});
