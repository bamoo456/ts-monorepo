import mozlog from 'mozlog';

const logger = mozlog({
    app: 'my-logger',
    level: 'verbose', //default is INFO
    fmt: 'pretty', //default is 'heka'
    uncaught: 'exit', // default is 'log', also available as 'ignore'
    debug: true, //default is false
})('global');

export default logger;