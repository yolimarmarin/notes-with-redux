import {connect} from 'react-redux'
import Auth from '../../views/auth'
import emmit from '../actions'

const mapDispatchToProps = (dispatch) => ({
    actionUpdateUser : (user)=>dispatch(emmit.user.actions.actionUpdateUser(user)),
    
})

export default connect(null, mapDispatchToProps)(Auth)