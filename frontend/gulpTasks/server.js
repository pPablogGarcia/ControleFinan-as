const gulp = require("gulp");
const watch = require("gulp-watch");
const webserver = require("gulp-webserver");

var cors = function(req, res, next){
    res.header('Access-Control-Allow-Orgin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTION');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

gulp.task("watch", () => {
    watch("app/**/*.html", () => gulp.start("app.html"));
    watch("app/**/*.css", () => gulp.start("app.css"));
    watch("app/**/*.js", () => gulp.start("app.js"));
    watch("app/**/*.*", () => gulp.start("app.assets"));
});

gulp.task("server", ["watch"], () => {
    return gulp.src("public")
        .pipe(webserver({
             livereload: true, 
             port: 3000, 
             open: true
            }));
});