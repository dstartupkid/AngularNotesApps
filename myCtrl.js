app.controller("myNotesAppController", function($scope) {

	$scope.notesList = [{id: "1", title: "Go to Gym from monday!", description: "It's been to late now. Now or Never. No more excuses and I am going to gym from monday onwards!", priority: "critical"}, 
						{id: "2", title: "Give her a surprise gift for birthday", description: "Remember, 8th May is Shruti's birthday and I have to give sensational gift to her. Price should not matter :)", priority: "imp"},
						{id: "3", title: "Collect Grocery!", description: "Don't forget to collect up all the items mom told me to collect up from th grocery store. Can be done preferably while coming back from college", priority: "trivial"},
						{id: "4", title: "Take papa to hospital for checkup!", description: "Papa's monthly checkup date is 10th of every month. So, do remember to take him to the hospital!!", priority: "critical"},
						{id: "5", title: "Prepare well for the interview!", description: "You are almost there buddy. All of your hard-work and sweat gonna pay-off soon. Prepare well for tommorow's interview :)", priority: "imp"}
				];

	

	//Setting limit on displaying items in notes bunch in right panel
	var boolLimitCClicked = false;
	var boolLimitIClicked = false;
	var boolLimitTClicked = false;
	$scope.LimitC = 5;
	$scope.LimitI = 5;
	$scope.LimitT = 5;

	$scope.setLimitC = function() {

		//for setting Limit on Critical Notes Bunch
		if(boolLimitCClicked == false) {
			$scope.LimitC = 20;
			boolLimitCClicked = true;
		}
		else {
			$scope.LimitC = 5;
			boolLimitCClicked = false;
		}
	}

	$scope.setLimitI = function() {
		
		//for setting Limit on Critical Notes Bunch
		if(boolLimitIClicked == false) {
			$scope.LimitI = 20;
			boolLimitIClicked = true;
		}
		else {
			$scope.LimitI = 5;
			boolLimitIClicked = false;
		}
	}

	$scope.setLimitT = function() {

		//for setting Limit on Critical Notes Bunch
		if(boolLimitTClicked == false) {
			$scope.LimitT = 20;
			boolLimitTClicked = true;
		}
		else {
			$scope.LimitT = 5;
			boolLimitTClicked = false;
		}		
	}

	$scope.removeNote = function(id) {
		var oldList = $scope.notesList;
		$scope.notesList = [];
		angular.forEach( oldList, function(x) {
			if(x.id != id) {
				$scope.notesList.push(x);
			}
		});

	};

	$scope.addNote = function() {
		var count = $scope.notesList[$scope.notesList.length-1].id;
		count++;
		$scope.notesList.push({id: count, title: $scope.noteInputTitle, description: $scope.noteInputDesc, priority: $scope.noteInputPriority});
		$scope.noteInputTitle = "";
		$scope.noteInputDesc = "";
		$scope.noteInputPriority = "";
		$('#cancelNote').click();
	};

	$scope.editNote = function(id) {
		$scope.noteInputTitle = $scope.notesList[id-1].title;
		$scope.noteInputDesc = $scope.notesList[id-1].description;
		$scope.noteInputPriority = $scope.notesList[id-1].priority;

		$scope.updateNote = function() {
			var oldList = $scope.notesList;
			$scope.notesList = [];
			angular.forEach( oldList, function(x) { 
				 
					if(x.id < id) {
						$scope.notesList.push(x); 
					}

					if(x.id == id) {
						$scope.notesList.push({id: id, title: $scope.noteInputTitle, description: $scope.noteInputDesc, priority: $scope.noteInputPriority});
					}

					if(x.id > id) {
						$scope.notesList.push(x);
					}
				
			});

			$scope.noteInputTitle = "";
			$scope.noteInputDesc = "";
			$scope.noteInputPriority = "";
			$('#cancelNote2').click();
		}
	}



	//Checkbox Filters

		$scope.priorityIncludes = [];

		$scope.includePriority = function(priority) {
			var i = $.inArray(priority, $scope.priorityIncludes);
			if(i > -1) {
				$scope.priorityIncludes.splice(i, 1);
			}
			else {
				$scope.priorityIncludes.push(priority);
			}
		}

		$scope.priority = function(notesList) {
			if($scope.priorityIncludes.length > 0) {
				if($.inArray(notesList.priority, $scope.priorityIncludes) < 0)
					return;
			}

			return notesList;
		}

	//Checkbox Filters Ends


});