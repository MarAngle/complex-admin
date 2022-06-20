const { defineConfig } = require('@vue/cli-service')

let productionSourceMap = true
if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_APITYPE === 'prod') {
  productionSourceMap = false
}

module.exports = defineConfig({
  productionSourceMap: productionSourceMap,
  transpileDependencies: true
})
