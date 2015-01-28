'use strict';

angular
	.module(
		'newplayer',
		[
			'ui.router',
			'ui.bootstrap',
			'oc.lazyLoad',
			'ngSanitize'
		]
	);

angular
	.module('newplayer')
	/** @ngInject */
	.factory('APIService' , APIService)
	/** @ngInject */
	.factory('ConfigService' , ConfigService)
	/** @ngInject */
	.factory('ManifestService' , ManifestService)
	/** @ngInject */
	.factory('ComponentService' , ComponentService)
	/** @ngInject */
	.factory('AssessmentService' , AssessmentService)
	/** @ngInject */
	.controller('AppController' , AppController)
	/** @ngInject */
	.directive('npComponent' , ComponentDirective)

	/** @ngInject */
	.config(Router)

	/** @ngInject */
	.run(
		function($rootScope, $state, $stateParams)
		{
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			//FastClick.attach(document.body);
		}
	);

