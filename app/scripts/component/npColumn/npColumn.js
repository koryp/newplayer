'use strict';

angular
	.module(
		'npColumn',
		[ ]
	);

angular
	.module('npColumn')

	/** @ngInject */
	.controller( 'npColumnController',
		function( $log, $scope, $sce )
		{
			var chunk = function( arr, size )
			{
				var newArr = [];
				for (var i=0; i<arr.length; i+=size) {
					newArr.push(arr.slice(i, i+size));
				}
				return newArr;
			};


			var cmpData = $scope.component.data || {};
			$log.debug( 'npColumn::data', cmpData );

			var childCount = $scope.component.components.length;
			var columns = +cmpData.cols;
			if ( !columns ) {
				columns = childCount;
			}

			$scope.rows = chunk( $scope.component.components, columns );

			this.lastRow = Math.ceil(childCount / columns);
			this.lastRowIndex = columns * Math.floor(childCount / columns);
			this.lastRowColumns = (childCount % columns === 0) ? columns : (childCount % columns);
			this.columns = columns;
			this.columnWidth = 100 / columns;
		}
	)

	/** @ngInject */
	.run(
		function( $log )
		{
			$log.debug('npColumn::component loaded!');
		}
	);

