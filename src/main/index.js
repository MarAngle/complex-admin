// 全局功能函数
import { init as initFunc } from './func/index'

import { init as initAntd} from './antd/index'

export let init = function(app) {
  return initFunc(initAntd(app))
}