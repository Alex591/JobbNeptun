// ==UserScript==
// @name        Igazi Neptun
// @namespace   none
// @description Replaces images
// @include     https://www-*.neptun.unideb.hu/hallgato/login.aspx
// @version     1.0.0
// @grant       GM_addStyle
// @run-at   document-start

// ==/UserScript==
GM_addStyle(`
    .login_right_side div[orgid="hallgato_default"]
 {
    background-image: url(https://raw.githubusercontent.com/Alex591/JobbNeptun/main/login_right_image.png);
 }`
    );
