//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var exec = require('child_process').exec;

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('deploy-github', shell.task([
  'git add .',
  'git commit -m "modificando"',
  'git push origin master'
]));
