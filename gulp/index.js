import runSequence from 'run-sequence';
import gulp from 'gulp';
import './tasks/clean';
import './tasks/webpack';
import './tasks/sass';
import './tasks/eslint';
import './tasks/watch';

gulp.task('default', function() {
  runSequence('clean', ['webpack', 'eslint-all', 'sass'], 'watch');
});
