'use strict';

describe('Directive: app.component.sheard.service', function BasedTeseSwite() {

  // // load the directive's module
  beforeEach(module('app.component.events'));

  var eventData;
  beforeEach(inject([
    'app.component.events.sheard.service',
    function InjectInitialize(_eventData_) {
      eventData = _eventData_;
    },]));

  it('check...', function MakeHtmlElement() {
    eventData.event.create([1,2,3]);
    expect(eventData.event.get()).toEqual([1,2,3]);

  });
});
