import * as brandActionCreators from './brand-actions'
import * as asyncActions from './async-actions'
import * as productActionCreator from './products-actions'
import * as orderActionCreator from "./order-actions"

export default {
    ...brandActionCreators,
    ...productActionCreator,
    ...orderActionCreator,
    ...asyncActions,
}