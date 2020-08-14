import {connect} from 'react-redux'
import Home from '../../views/home'
import emmit from '../actions'


const mapStateToProps = (state) =>({
    notes: state.notesStore.notes,
    user: state.userStore
})

const mapDispatchToProps = (dispatch) => ({
    epicFetchNotesByUserId : (uid)=>dispatch(emmit.notes.epics.epicFetchNotesByUserId(uid)),
    createNoteEpic: (note)=>dispatch(emmit.notes.epics.epicCreateNote(note)),
    updateNoteEpic: (id,note) =>dispatch(emmit.notes.epics.epicUpdateNoteById(id,note)),
    epicDeleteNoteById: (id) => dispatch(emmit.notes.epics.epicDeleteNoteById(id)),
    fetchUserEpic: () => dispatch(emmit.user.epics.fecthUserData()),
    epicClearStore: () => dispatch(emmit.general.epics.epicClearStore())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)