import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import util from 'gulp-util';
import config from '../config';

gulp.task('webpack', () => {
  return gulp.src('./index.js')
    .pipe(gulpWebpack({
      output: {
        filename: config.mainScript
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin()
      ],
      module: {
        loaders: [
          {
            loaders: ['ng-annotate', 'babel-loader']
          }
        ]
      }
    }, webpack, (error) => {
      if (error) {
        throw new util.PluginError('webpack', error);
      }
    }))
    .pipe(gulp.dest(config.destFolder));
});
