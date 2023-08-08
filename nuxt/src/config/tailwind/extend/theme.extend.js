var colors = require("./colors.extend")
var spacing = require('./spacing.extend');
var screens = require('./screens.extend');
var background = require('./background.extend');

module.exports = {
    colors: Object.keys(colors).length > 0 ? colors : undefined,
    spacing: Object.keys(spacing).length > 0 ? spacing : undefined,
    screens: Object.keys(screens).length > 0 ? screens : undefined,
    background: Object.keys(background).length > 0 ? background : undefined,
    inset: {
        100: '100%',
        50: '50%',
        4: '1rem'
    },
    boxShadow: {
        xlexpert: '-6rem 6rem 0 0 #efefef',
        xlexpertRev: '6rem 6rem 0 0 #efefef',
        mdexpert: '-4rem 4rem 0 0 #efefef',
        mdexpertRev: '4rem 4rem 0 0 #efefef',
        expert: '-2rem 4rem 0 0 #efefef',
        expertRev: '2rem 4rem 0 0 #efefef',
        card: '0 0 25px 0 rgba(0, 0, 0, 0.1)',
    },
    height: {
        '25': '25rem',
    },
    zIndex: {
        '-1': '-1',
    },
    minHeight: {
        '52': '52px'
    }
}