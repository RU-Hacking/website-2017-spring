submitted = false;

$(document).ready(() => {
		
	$('#signup-form').submit((event) => {

		/* Prevents defualt redirect */
		event.preventDefault();
		
		/* Prevents accidental mulitple submissions */
		
		/* Prevents empty submissions */
        if($('#email').val() === "") {
            return;
        }

		

	});
	
});

// Signup Form.
(function() {
	
	// Vars.
		var $form = document.querySelectorAll('#signup-form')[0],
			$submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
			$message;

	// Bail if addEventListener isn't supported.
		if (!('addEventListener' in $form))
			return;

	// Message.
		$message = document.createElement('span');
			$message.classList.add('message');
			$form.appendChild($message);

		$message._show = function(type, text) {

			$message.innerHTML = text;
			$message.classList.add(type);
			$message.classList.add('visible');

			window.setTimeout(function() {
				$message._hide();
			}, 3000);

		};

		$message._hide = function() {
			$message.classList.remove('visible');
		};

	// Events.
		$form.addEventListener('submit', function(event) {

			event.stopPropagation();
			event.preventDefault();

			// Hide message.
				$message._hide();

			// Disable submit.
				$submit.disabled = true;

			// Process form.
				if(submitted) {
					return;
				}

			// JSONifies form.
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
						$message._show('success', 'Thank you!');
					}, (e) => {
						//console.log(e);
						//$message._show('failure', 'Something went wrong. Please try again.');
					});

		});

})();