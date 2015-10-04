import {mainModule} from './main';
import LayoutViewController from './layout-view-controller';
import mocks from 'angular-mocks';

describe('LayoutViewController', () => {
    let scope;
    let ctrl;
    let $translate;
    let $q;
    let $httpBackend;
    let $interval;
    let $timeout;

    beforeEach(angular.mock.module(mainModule.name));

    beforeEach(angular.mock.inject(function($rootScope, $controller, _$timeout_, _$interval_, _$httpBackend_, _$q_, _$translate_){
        scope = $rootScope.$new();
         $httpBackend = _$httpBackend_;
        $q = _$q_;
        $interval = _$interval_;
        $timeout = _$timeout_;
        $translate = _$translate_;
    }));

    it('should invoke itself succesfully', function(){
        expect(1).to.equal(1);
    });

    describe('when invoking the layout view controller', function() {

        beforeEach(function() {
            ctrl = new LayoutViewController(scope, $q, $translate);
        });
        it('should be done', function() {
            expect(ctrl.done).to.equal(true);
        });
        it('should have a displayDepth of 6', function() {
            expect(ctrl.displayDepth).to.equal(6);
        });
        it('should have a displayWord of me', function() {
            expect(ctrl.displayWord).to.equal('tony.magellan@gmail.com');
        });
    });

});