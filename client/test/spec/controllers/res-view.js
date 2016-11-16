'use strict';

describe('Controller: ResViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResViewCtrl = $controller('ResViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResViewCtrl.awesomeThings.length).toBe(3);
  });
});
