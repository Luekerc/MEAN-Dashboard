'use strict';

describe('Controller: ResDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResDeleteCtrl = $controller('ResDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
