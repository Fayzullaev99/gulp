global.$ = {
    gulp: require('gulp'),
    path:{
        src:{
            html:'./app/src/*.{html,pug,jade}'
        },
        build:{
            html:'./app/dist/'
        }
    }
}
// console.log($.gulp);

const test = require('./gulp/tasks/html.js')
console.log(test);