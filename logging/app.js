const log = require("../logging/logger")

log('Application has started.');
log('This is a warning message.');
log('This is an error message.');


setTimeout(() => {
    log('Doing some work...');
}, 2000);