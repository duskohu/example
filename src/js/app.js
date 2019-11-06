
import jQuery from '../../node_modules/jquery/dist/jquery.js';
var jquery = require("jquery");
window.$ = window.jQuery = jquery;

require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');

window.Waves = require('../../node_modules/node-waves/dist/waves.js');
// other libs ....

import'../scss/app.scss';

import Form from './Form.js';
const form = new Form();
