
<body>

	<div class="container-fluid">


		<div class="row row_header clearfix col-xs-12">
	
			<div class="col-xs-3">
				<h1><span id="yoo">yoo</span><span id="vee">Vee</span></h1>
			</div>

			<div class="row_location_form col-xs-5 col-xs-offset-4">
				<form role="form">
  				<div class="form-group">
    			<input type="text" class="form-control" id="cityLocale" placeholder="location">
  				
    				<a class="search_button btn btn-xs">Submit</a>
				</form>
				</div>
			</div>
		</div>			

		
		<div class="row locate_error col-xs-12">
			<div class="err_mess col-xs-10 col-xs-offset-1">
				<h4>location not found.<br>
				please enter location in search bar</h4>
			</div>
		</div> 

		<div class="row locate_error col-xs-12">
			<div class="err_mess_search col-xs-10 col-xs-offset-1">
				<h4>location not recognised<br>
				please try again</h4>
			</div>
		</div> 


		<div class="row row_today clearfix col-xs-12">
			<div class="col-xs-8 col-xs-offset-4">
				<h3>Today's UV</h3>
			</div>	
		</div>

		<div class="row row_today_rating clearfix col-xs-12">
		
			<div class="col-xs-8 col-xs-offset-4" id="today">
				<h2><!--js injects value here--></h2>
			</div>	


		</div>

		<div class="row row_exposure clearfix col-xs-12">
		
			<div class="col-xs-8 col-xs-offset-4">
				<h3>Exposure</h3>
			</div>	

		</div>

		<div class="row row_exposure_time clearfix col-xs-8 col-xs-offset-4">
		
			<div class="exp_pic exp">
				<img src="images/clock_white.png" alt="pic" title="picture of clock" class="img-responsive">
			</div>
			<div class="exp_time exp" id="expTime">
				<h4><!--js injects value here--></h4>
			</div>
			<div class="exp_mess exp" id="expUnit">
				<h3>mins<br>MAX</h3>
			</div>	

		</div>

		<div class="row row_nextday clearfix col-xs-12">
		
			<div class="col-xs-8 col-xs-offset-4" id="nextday">
				<h3>Outlook</h3>
			</div>	

		</div>

		<div class="row row_nextday_rating clearfix col-xs-12">
		
			<div class="col-xs-8 col-xs-offset-4" id="outlook">
				<h2><!--js injects value here--></h2>
			</div>	

		</div>
	
	</div>

	<!--<script id="error-template" type="text/x-handlebars-template">
	<div id="error">

		Location not found<br>please try again
	</div>

	</script>-->



	<script type="text/javascript" src="js/main.js"></script> 
	 
	
</body>