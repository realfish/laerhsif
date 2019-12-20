let doc = document;

// Misc
import _misc from './_misc';
_misc();

// View
import viewHome from './view/home';

// View router
let view = doc.querySelector('body').classList[0];

switch (view) {
	case 'home': {
		viewHome();
		break;
	}
}
