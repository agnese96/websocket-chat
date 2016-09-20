chatApp.directive("navbarLogin", function(){
	return {
		templateUrl: "angular/views/navbar-login.html",
		link: function(scope, element, attrs){
			$(".btn.login").on("click", function (){
				if(!scope.loginRequest()){
					$(".username-input").parent().toggleClass("has-error");
				}
			});
		}
	};
});

chatApp.directive("navbarUser", function (){
	return {
		templateUrl: "angular/views/navbar-user.html"
	}
});