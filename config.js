
const gulp = require('gulp');
let base = gulp.env._[0] !== 'pro' ? './build_Dev' : './build_Pro';


module.exports = {
    clean:{
        src:base,
    },
    html: {
        src:'./develop/app/**/*.html',
        dest: base+"/"
    },
    sass:{
        src :'./develop/app/**/*.scss',
        dest: base+"/",       //- 保存位置
    },
    ecmajs:{
        src :'./develop/app/**/**/*.js',
        dest: base+"/",       //- 保存位置
    },
    images:{
        src :'./develop/app/**/images/**/*',
        dest: base+"/",
    },
    plugin:{
        src :'./develop/app/**/plugin/**/*',
        dest: base+"/",
    },
    common:{
        src :'./develop/app/**/common/**/*',
        dest: base+"/",
    },
    data:{
        src :'./develop/app/**/data/**/*',
        dest: base+"/",
    }
}