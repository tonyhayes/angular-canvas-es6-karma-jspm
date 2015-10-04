import angular from 'angular';
import 'angular-translate';
import 'angular-ui/ui-bootstrap-tpls';
import 'bootstrap-css-only/css/bootstrap.css!';
import './styles/layout-styles.css!';
import LayoutViewController from './layout-view-controller';
import onLayoutViewConfig from './config/config';
import onTranslateConfig from './config/translate-config';
import layoutView from './layout-view-directive';
import layoutViewToolbar from './layout-view-toolbar-directive';
import layoutViewBody from './layout-view-body-directive';

// dev testing only
//import onMockConfig from './mock-responses/mock-config';
//import layoutViewMockResponse from './mock-responses/layout-view-mock-response-inteceptor';

export let mainModule = angular.module('layout-view', [
	// angular modules
	

	// third party modules
	'pascalprecht.translate',
    'ui.bootstrap',

	// core modules

	//component modules

	//state modules
	
	]);
//dev testing only
//mainModule.factory('layoutViewMockResponse', layoutViewMockResponse)
//mainModule.config(onMockConfig)
//app
mainModule.config(onLayoutViewConfig)
mainModule.config(onTranslateConfig)
mainModule.controller('layoutViewController', LayoutViewController);
mainModule.directive('layoutView', layoutView);
mainModule.directive('layoutViewToolbar', layoutViewToolbar);
mainModule.directive('layoutViewBody', layoutViewBody);
