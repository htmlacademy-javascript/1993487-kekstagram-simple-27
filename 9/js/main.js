import './form.js';
import './scale.js';
import './effects.js';

import {createSimilarPost} from './miniatures.js';
import { getData } from './api.js';
import { initValidation } from './form.js';
import { showAlert } from './messages.js';

getData(createSimilarPost, showAlert);

initValidation();
