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



// Handle avatar node's spinning
let $avatar         = doc.querySelector('.avatar');
let $allAvatarNodes = doc.querySelectorAll('.avatar-node');
let isSpin          = true;

// Ref: https://css-tricks.com/controlling-css-animations-transitions-javascript/
const PFX = ["webkit", "moz", "MS", "o", ""];
let prefixedEvent = function ($el, type, callback) {
	for (let i = 0; i < PFX.length; i++) {
		if (!PFX[i]) {
			type = type.toLowerCase();
		}
		$el.addEventListener(PFX[i] + type, callback, false);
	}
};

let stopNodes = function () {
	// Flip the flag
	isSpin = false;
	
	for (let i = 0; i < $allAvatarNodes.length; i++) {
		let $node = $allAvatarNodes[i];
		if (!$node.classList.contains('is-paused')) {
			let pauseNode = function () {
				let $node = $allAvatarNodes[i];
				$node.classList.add('is-paused');
				$node.removeEventListener('animationiteration', pauseNode);
				pauseNode = null;
			};
			
			// $node.addEventListener('animationiteration', pauseNode);
			prefixedEvent($node, "animationiteration", pauseNode);
		}
	}
};
let spinNodes = function () {
	// Flip the flag
	isSpin = true;
	
	// Do reverting
	for (let i = 0; i < $allAvatarNodes.length; i++) {
		let $node = $allAvatarNodes[i];
		$node.classList.remove('is-paused');
	}
};

$avatar.addEventListener('click', function () {
	if (isSpin) {
		stopNodes();
	} else {
		spinNodes();
	}
});

}
