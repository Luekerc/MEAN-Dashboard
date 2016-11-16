'use strict';

describe('Controller: ResCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResCtrl = $controller('ResCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResCtrl.awesomeThings.length).toBe(3);
  });
});
