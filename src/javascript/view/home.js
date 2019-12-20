export default function () {

let doc = document;
// let win = window;

// Prevent `click` from bubbling up to $('.avatar-node')
let $allAvatarLinks = doc.querySelectorAll('.avatar-link');
for (let i = 0; i < $allAvatarLinks.length; i++) {
	$allAvatarLinks[i].addEventListener('click', function (e) {
		e.stopPropagation();
	});
}

// var $avatar = $('.avatar');
// var $avatarNode = $('.avatar-node');
let $avatar = doc.querySelector('.avatar');
let $allAvatarNodes = doc.querySelectorAll('.avatar-node');
let isSpread = true;


// Handle to spread the nodes of `.avatar`
/* var avatarSpread = function() {
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
}; */
let stopNodes = function () {
	// Flip the flag
	isSpread = false;
	
	for (let i = 0; i < $allAvatarNodes.length; i++) {
		let $node = $allAvatarNodes[i];
		if (!$node.classList.contains('is-paused')) {
			$node.addEventListener('animationiteration', function () {
				$node.classList.add('is-paused');
			});
		}
	}
};

// Handle to revert handle `avatarSpread`
/* var avatarRevert = function() {
	// Switch handle
	$avatar.off('.revert').on('click.spread', avatarSpread);
	
	// Do reverting
	$avatarNode.removeClass('is-paused');
}; */
let spinNodes = function () {
	// Flip the flag
	isSpread = true;
	
	// Do reverting
	for (let i = 0; i < $allAvatarNodes.length; i++) {
		let $node = $allAvatarNodes[i];
		$node.classList.remove('is-paused');
	}
};

// Init
// $avatar.on('click.spread', avatarSpread);
$avatar.addEventListener('click', function () {
	if (isSpread) {
		stopNodes();
	} else {
		spinNodes();
	}
});

}
