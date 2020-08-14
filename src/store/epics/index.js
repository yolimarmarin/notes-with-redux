import {combineEpics} from 'redux-observable'

import {
    fetchNotesByUserIdEpic,
    createNoteEpic,
    updateNoteEpic,
    deleteNoteEpic
} from './notes'

import {
    fetchUserEpic
} from './user'

import {
    epicClearStore
} from './general'

export default combineEpics(
    fetchNotesByUserIdEpic,
    createNoteEpic,
    updateNoteEpic,
    deleteNoteEpic,
    fetchUserEpic,
    epicClearStore
)