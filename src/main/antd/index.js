import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export let init = function(app) {
  return app.use(Antd)
}
