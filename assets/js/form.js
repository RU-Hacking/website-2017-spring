submitted = false;

$(document).ready(() => {
		
	$('#signup-form').submit((event) => {

		/* Prevents defualt redirect */
		event.preventDefault();
		
		/* Prevents accidental mulitple submissions */
		if(submitted) {
			return;
        }
		
		/* Prevents empty submissions */
        if($('#email').val() === "") {
            return;
        }

		/* JSONifies form */
        var formData = $('#signup-form').serialize();

		/* Submits form, assumes success */
		$.ajax({
			type: 'POST',
			url: "https://docs.google.com/forms/d/e/1FAIpQLSeTyUtawOnXubiYEWM8-1ZxNZzazim839NfjmXjXpOlo1yEZw/formResponse",
			crossDomain: true,
			data: formData,
			dataType: 'json',
			id: "mG61Hd"
		}).then(() => {
			submitted = true;
        });

	});
	
});