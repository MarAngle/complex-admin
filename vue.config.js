const path = require('path')
const { defineConfig } = require('@vue/cli-service')

let productionSourceMap = true
if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_APITYPE === 'prod') {
  productionSourceMap = false
}

module.exports = defineConfig({
  productionSourceMap: productionSourceMap,
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/main/style/index.less')
      ]
    }
  }
})
