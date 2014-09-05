$(document).ready(function(){

	//my load flow is
	//check if device supports geolocation services
	//if yes run getLocationAuto function
	//pass lat lon co-ordinates to getUv function
	//return results to screen
	//location search button is also loaded
	//if no load search box and run getLocationSearch function
	//return results to screen

	if (navigator.geolocation) {
	
		getLocationAuto();
	
	}else{
	
		$( ".err_mess" ).show();
		
	}

	function getLocationAuto(){

		//co-ordinates from auto detect
		//pass as latitude and longitude to getUv function

		navigator.geolocation.getCurrentPosition(function(position){

				//this is the success state when we get the current position back
				console.log(position);

				var latitude = position.coords.latitude;
				var	longitude = position.coords.longitude;
				
			
			}, function(error) {

				//this is what happens when we cant get the current position

				//show/hide error div
				$( ".err_mess" ).show();
				

				});
		
		
	}

	function getUv(latitude, longitude){

		
		$.ajax({

			type:'GET',
			
			//this is the url to get the UV from conditions relevant to a geolookup of lat/long co-ords
			//use the variable above to inject the required co-ords
			url: 'http://api.wunderground.com/api/1b9d4eaa473eb5dc/conditions/geolookup/q/' + latitude + ',' + longitude + '.json',
				 //http://api.wunderground.com/api/1b9d4eaa473eb5dc/geolookup/q/37.776289,-122.395234.json
			
			// select the UV data from the json file
			//data: 'uv='+UV+'&format=json&jsoncallback=?',
			success: function(data){
				console.log(data);

				// convert the uv rating into the string to be displayed

				//create variable to hold the value of returned UV value
				var uvRating = (data.current_observation.UV);
				var weather = (data.current_observation.weather);

				//console.log(uvRating);

				// create variable to hold the corresponding string for the UV value 
				var uvString = "bananas";
				var expString = "rhubarb";

				
				// create if statement to determine which string to use

				if (uvRating <= 2 ) {
    				uvString = "LOW";
    				$('#today').html(uvString).css({color:"#02CD02"});
    				expString = "90";
    				$('#expTime').html(expString);
				} else if (uvRating > 2 && uvRating <= 5 ) {
    				uvString = "moderate";
    				$('#today').html(uvString).css({color:"#ffff01"});
    				expString = "45";
    				$('#expTime').html(expString);
				} else if (uvRating > 5 && uvRating <= 7) {
    				uvString = "high";
    				$('#today').html(uvString).css({color:"#FF6600"});
    				expString = "30";
    				$('#expTime').html(expString);
				} else if (uvRating > 7 && uvRating <= 10) {
					uvString = "very high";
					$('#today').html(uvString).css({color:"#FE0002"});
					expString = "20";
    				$('#expTime').html(expString);
				} else {
					uvString = "extreme";
					$('#today').html(uvString).css({color:"#CC019B"});
					expString = "10";
    				$('#expTime').html(expString);
				}

					//get weather outlook finromationand display
					$('#outlook').html(weather).css({color:"#02CD02"});

					//on success hide the error messages
					$( ".err_mess" ).hide();
					$(".err_mess_search").hide();

				//console.log(uvString);
				
			},
			error: function(){
				console.log('no');
			}, 

			dataType: 'jsonp'
		});
	}

		function getLocationSearch() {
	    var geocoder = new google.maps.Geocoder();
	    var address = document.getElementById("cityLocale").value;
	    geocoder.geocode({ 'address': address }, function (results, status) {
	        if (status == google.maps.GeocoderStatus.OK) {
	            var latitude = results[0].geometry.location.lat();
	            var longitude = results[0].geometry.location.lng();
	            
	            getUv(latitude, longitude);
	            //alert("Latitude: " + latitude + "\nLongitude: " + longitude);
	        } else {
	           
	        	//hide previous error message and display correct one
	           $(".err_mess").hide(); 
	           $( ".err_mess_search" ).show();

	        }
	    });
    };

    $('.search_button').on('click', function(event){

    		event.preventDefault();

    		getLocationSearch(); 
    
    });
	
});	




