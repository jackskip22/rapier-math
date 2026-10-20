// SPDX-License-Identifier: MIT
import {parseMathTex as parse} from '../src/math/parser.js';
import {renderMath as render, mathRenderToString as renderToString} from '../src/math/api.js';
import {mathFit as fit, mathObserve as observe} from '../src/math/browser.js';
const version = "2.7.0";
export {version, parse, render, renderToString, fit, observe};
export default Object.freeze({version, parse, render, renderToString, fit, observe});
