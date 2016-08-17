/* global $ */

(function() {
	'use strict';

	// Prefix `animationiteration` event
	var animationiteration = 'animationiteration' + 
	' webkitAnimationIteration' + 
	' mozAnimationIteration' + 
	' MSAnimationIteration';
	
	// Prevent `click` from bubbling up to $('.avatar-node')
	$('.avatar-link').on('click', function(event) {
		event.stopPropagation();
	});
	
	// Event namespaces
	var EVENT_SPREAD = '.spread';
	var EVENT_REVERT = '.revert';
	
	// Handle to spread the dots of `.avatar`
	var avatarSpread = function() {
		$(this).off(EVENT_SPREAD);
		
		$('.avatar-node').each(function() {
			var $this = $(this);
			
			$this.on(animationiteration, function() {
				$this.addClass('is-paused');
				$this.off(animationiteration);
			});
		})
		.promise()
		.done(avatarRevert);
	};
	
	// Handle to revert handle `avatarSpread`
	var avatarRevert = function() {
		$('.avatar').on('click' + EVENT_REVERT, function() {
			$('.avatar-node').each(function() {
				var $this = $(this);
				$this.removeClass('is-paused');
			});
			
			$('.avatar').off(EVENT_REVERT).on('click' + EVENT_SPREAD, avatarSpread);
		});
	};
	
	// Init
	$('.avatar').on('click' + EVENT_SPREAD, avatarSpread);

})();
