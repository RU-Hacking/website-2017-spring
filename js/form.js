submitted = false;

$(document).ready(() => {
		
	$('#voting-form').submit((event) => {

		/* Prevents defualt redirect */
		event.preventDefault();
		
		/* Prevents accidental mulitple submissions */
		if(submitted) {
			return;
        }
        
        if($('#email').val() === "") {
            return;
        }

		/* JSONifies form */
        var formData = $('#voting-form').serialize();
        
        console.log(formData);

		/* Disables fields */
		$('input, textarea, label').each(function(i, obj) {
			disable(obj);
		});

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
        
		/* Animates in thank you message */
        $('#success').css('-webkit-transform', 'translateY(0)');
        $('#success').css('opacity', '1');

	});
});

/* Fades element out and disables editing */
function disable(obj) {
	$(obj).animate({
		opacity: 0.5
	}, 500, function() {
		$(obj).prop('disabled', true);
		$(obj).addClass("disabled");
	});
}