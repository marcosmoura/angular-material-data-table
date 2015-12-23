import gulp from 'gulp';
import webpack from 'webpack';
import util from 'gulp-util';
import config from '../config';

gulp.task('webpack', () => {
  webpack({
    entry: './index.js',
    output: {
      path: config.destFolder,
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
          loaders: ['babel-loader', 'ng-annotate']
        }
      ]
    }
  }, function(error) {
    if (error) {
      throw new util.PluginError('webpack', error);
    }
  });
});
