'use strict'

var sourceDir = './src'
var outputDir = './assets'

module.exports = {
  sass: {
    src: `${sourceDir}/sass/**/*.scss`,
    dest: `${outputDir}/css`,
    settings: {
      outputStyle: 'compressed',
      imagePath: '/assets/images'
    }
  },
  images: {
    src: `${sourceDir}/img/**`,
    dest: `${outputDir}/img`
  }
}
