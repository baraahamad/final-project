
// Import SCSS files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/layout.scss';
import './styles/index.scss';
import './styles/nav.scss';
import './styles/modal.scss';
import { checkForCity } from './js/cityChecker.js';
import { handleSubmit } from './js/formHandler.js';
import { calcTripLength } from './js/formHandler.js';
export { 
    checkForCity,
    handleSubmit,
    calcTripLength,
};