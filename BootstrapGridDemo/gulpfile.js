/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copyViews', () => gulp
  .src('*.html')
  .pipe(gulp.dest('wwwroot'))
);

gulp.task('copyBootstrap', () => gulp
  .src('./node_modules/bootstrap/dist/**/*.*')
  .pipe(gulp.dest('wwwroot/dist'))
);

gulp.task('copyStyles', () => gulp
  .src('styles.css')
  .pipe(gulp.dest('wwwroot/dist/css'))
);

gulp.task('copyImages', () => gulp
  .src('images/*.*')
  .pipe(gulp.dest('wwwroot/dist/images'))
);

gulp.task('default', ['copyViews','copyBootstrap','copyStyles','copyImages']);