var extendedTheme = require("../extend/theme.extend");
var container = require('./container');
var colors = require('./colors');
var spacing = require('./spacing');
var screens = require('./screens');


module.exports = {
    colors: Object.keys(colors).length > 0 ? colors : undefined,
    screens: Object.keys(screens).length > 0 ? screens : undefined,
    spacing: Object.keys(spacing).length > 0 ? spacing : undefined,

    darkSelector: ".dark-mode",
    fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        poppinssemibold: ['poppins', 'sans-serif'],
        poppinsmedium: ['poppins', 'sans-serif']
    },
    container: Object.keys(container).length > 0 ? container : undefined,
    extend: Object.keys(extendedTheme).length > 0 ? extendedTheme : undefined
}