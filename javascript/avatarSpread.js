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
	
	var $avatar = $('.avatar');
	var $avatarNode = $('.avatar-node');
	
	// Handle to spread the nodes of `.avatar`
	var avatarSpread = function() {
		// Switch handle
		$avatar.off('.spread').on('click.revert', avatarRevert);
		
		// Do spreading
		$avatarNode.each(function() {
			var $this = $(this);
			
			if ( !$this.hasClass('is-paused') ) {
				$this.on(animationiteration, function() {
					$this.addClass('is-paused');
					$this.off(animationiteration);
				});
			}
		});
	};
	
	// Handle to revert handle `avatarSpread`
	var avatarRevert = function() {
		// Switch handle
		$avatar.off('.revert').on('click.spread', avatarSpread);
		
		// Do reverting
		$avatarNode.removeClass('is-paused');
	};
	
	// Init
	$avatar.on('click.spread', avatarSpread);

})();
