import ReactDecorator from '../base/react_decorator'
import BaseRouter from '../base/router'
import Searchform from '../components/search/searchform'

export default class SearchRouter extends BaseRouter {
  register() {
    this.route('/users/search', this.decorateUser)
  }

  decorateUser(ctx, next) {
    (new ReactDecorator()).decorate('react-component', Searchform)
    next()
  }
}
