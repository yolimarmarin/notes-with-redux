import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import {logOut} from '../../data/client-http'
import { useHistory } from "react-router-dom";

const Home = ({
  epicFetchNotesByUserId,
  notes,
  createNoteEpic,
  updateNoteEpic,
  epicDeleteNoteById,
  fetchUserEpic,
  user,
  epicClearStore
}) => {
  const history = useHistory();
  const [newNote, setNewNote] = useState({ title: "", body: "",user_id:null });
  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    id: null,
  });

  useEffect(() => {
    fetchUserEpic();
  }, []);

  useEffect(()=>{
    epicFetchNotesByUserId(user.uid)
  },[user.uid])

  const onClickCreateNewNote = () => {
    createNoteEpic({ ...newNote, user_id:user.uid });
    setNewNote({
      title: "",
      body: "",
      user_id: null
    });
  };

  const onClickSaveChanges = () => {
    updateNoteEpic(currentNote.id, currentNote);
    setCurrentNote({ title: "", body: "", id: null, user_id:null });
  };

  const onChangeNewNoteTitle = (e) => {
    const value = e.target.value;
    setNewNote({ ...newNote, title: value });
  };

  const onChangeNewNoteBody = (e) => {
    const value = e.target.value;
    setNewNote({ ...newNote, body: value });
  };

  const onClickSelectNote = (note) => {
    setCurrentNote({ ...note });
  };

  const onChangeCurrentNoteTitle = (e) => {
    const value = e.target.value;
    setCurrentNote({ ...currentNote, title: value });
  };

  const onChangeCurrentNoteBody = (e) => {
    const value = e.target.value;
    setCurrentNote({ ...currentNote, body: value });
  };

  const onClickDeleteNote = (id) => {
    epicDeleteNoteById(id);
  };

  const onClickLogOut =async ()=>{
    await logOut()
    epicClearStore()
    history.push('/')
  }

  return notes ? 
  <HomeView 
  onClickDeleteNote={onClickDeleteNote} 
  onChangeCurrentNoteBody={onChangeCurrentNoteBody}
  onChangeCurrentNoteTitle={onChangeCurrentNoteTitle}
  onClickSelectNote={onClickSelectNote}
  onChangeNewNoteBody={onChangeNewNoteBody}
  onChangeNewNoteTitle={onChangeNewNoteTitle}
  onClickSaveChanges={onClickSaveChanges}
  onClickCreateNewNote={onClickCreateNewNote}
  newNote={newNote}
  currentNote={currentNote}
  notes={notes}
  onClickLogOut={onClickLogOut}
  /> : <>loading</>;
};

export default Home;
