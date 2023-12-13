import 'virtual:svg-icons-register';
import { vMaska } from 'maska';

export default ({ app }) => {
  app.directive('maska', vMaska);
  // app.use(Maska);
};
