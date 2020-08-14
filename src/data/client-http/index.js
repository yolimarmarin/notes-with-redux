import { firebase, auth } from "../firebase/config";

const db = firebase.firestore();

const getNotesByUserId = async (uid) => {
  const notes = [];
  await db
    .collection("notes").where('user_id','==',uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        notes.push({ ...doc.data(), id: doc.id });
      });
    });
  return notes;
};

const createNote = async (note) => {
  let id;
  await db
    .collection("notes")
    .add(note)
    .then((noteRef) => {
      id = noteRef.id;
    });
  return { ...note, id: id };
};

const updateNoteById = async (id, note) => {
  delete note.id;
  await db
    .collection("notes")
    .doc(id)
    .update({
      ...note,
    });
};

const deleteNoteById = async (id) => {
  await db.collection("notes").doc(id).delete();
};

const createNewUser = async (email,password) => {
  const data = await auth.createUserWithEmailAndPassword(email, password);
  if (data) {
    return { email: data.user.email, uid: data.user.uid };
  } else {
    return null;
  }
};

const logIn = async (email, password) => {
  const data = await auth.signInWithEmailAndPassword(email, password);
  if (data) {
    return { email: data.user.email, uid: data.user.uid };
  } else {
    return null;
  }
};

const logOut = async () =>{
  await auth.signOut()
}

const getUserData = async () =>{
  const data = await auth.currentUser
  if (data) {
    return { email: data.email, uid: data.uid };
  } else {
    return null;
  }
}

export {
  getNotesByUserId,
  createNote,
  updateNoteById,
  deleteNoteById,
  createNewUser,
  getUserData,
  logOut,
  logIn
};
