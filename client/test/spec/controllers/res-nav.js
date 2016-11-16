'use strict';

describe('Controller: ResNavCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ResNavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResNavCtrl = $controller('ResNavCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResNavCtrl.awesomeThings.length).toBe(3);
  });
});
