import View from '../../View';
import headerViewTemplate from './headerViewTemplate';

export default class QuestionView extends View {
  constructor() {
    super(document.querySelector('header'));
  }

  getTemplate() {
    return headerViewTemplate();
  }
}
