var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

// clean our build folder
function Clean() {
  this.recursive = function(path) {
    if(path === '/') return;
    if( !fs.existsSync(path) ) return;
    var self = this;
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + '/' + file;
      if(fs.lstatSync(curPath).isDirectory()) // recurse
        self.recursive(curPath);
      else
        fs.unlinkSync(curPath);
    });
    fs.rmdirSync(path);
  };
}

Clean.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('run', function() {
    console.info('cleaned');
    self.recursive(BUILD_DIR);
  });
};

var clean = new Clean();
clean.recursive(BUILD_DIR);

var config = [{
  name : 'js',
  context: path.join(__dirname, 'app'),
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }/*,
      {
        test: /\.s[c|a]ss$/,
        loaders: ['css?minimize!./css/bundle.css', 'sass']
      }*/
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
      { from: 'images/**/*', to: 'images' }
    ])
  ]
},{
  name : 'css',
  context: path.join(__dirname, 'app'),
  //entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'css/bundle.css'
  },
  module : {
    loaders : [
      {
        test: /\.s[c|a]ss$/,
        loaders: ['css?minimize', 'sass']
      }
    ]
  }
}];

module.exports = config;