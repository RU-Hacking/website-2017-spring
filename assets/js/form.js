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
			$message.classList.add('success');
			$message.innerHTML = "Thank you!";
			$form.appendChild($message);

		$message._show = function() {

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
			
			// Stops PHP submission.
			event.preventDefault();
			event.stopPropagation();

			// Stop if invalid email.
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!re.test($('#email').val())) {
				return;
			}

			// Hide message.
				$message._hide();

			// Disable submit.
				$submit.disabled = true;

			// Process form.
				var formData = $('#signup-form').serialize();

			// Submits form.
				$.ajax({
					type: 'POST',
					url: "https://docs.google.com/forms/d/e/1FAIpQLSeTyUtawOnXubiYEWM8-1ZxNZzazim839NfjmXjXpOlo1yEZw/formResponse",
					crossDomain: true,
					data: formData,
					dataType: 'json',
					id: "mG61Hd",
					complete: () => {
						$form.reset();
						$submit.disabled = false;
						$message._show();	
					}
				});

		});

})();