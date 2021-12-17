import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';
import './App.scss';
import Note from './components/Note/Note';


function App() {
  // useState
  const [newTodo, setNewTodo] = useState('');
  const [newColor, setNewColor] = useState('pink');
  const [searchText, setSearchText] = useState('');

  //constants
  const colors = ['pink', 'purple', 'yellow', 'blue', 'green'];

  //Redux
  const dispatch = useDispatch();
  const items = useSelector(state => state.notes.items);

  // filter items
  const filteredItems = items.filter(item => item.text.toLowerCase().includes(searchText.toLowerCase()));

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      setNewTodo("please enter a note");
      return;
    }
    dispatch(addNote({
      id: nanoid(5),
      text: newTodo,
      color: newColor,
    }));
    setNewTodo('');
  };

  const handleColor = (e) =>setNewColor(e.target.value);
  const handleChange = (e) => setNewTodo(e.target.value);
  const handleSearch = (e) => setSearchText(e.target.value);
  


  return (
    <div className='app' >
      <div className='header' >
        <h1>NotesApp</h1>
      </div>

      <div className='search-box'>
        <input type="text" placeholder="Search..." value={searchText} onChange={handleSearch} />
      </div>

      <div className='add-note-box' >
        <textarea onChange={handleChange} value={newTodo} placeholder='Enter your note here...' ></textarea>
        <div className='add-note-buttons'>
          <div className='select-color'>
            {
              colors.map(color =>
                <button className={color} disabled={newColor === color} onClick={handleColor} value={color} key={color} />
              )
            }
          </div>

          <div className='add-button'>
            <button onClick={handleSubmit} >Add</button>
          </div>

        </div>
      </div>

      <div className='notes-box'>
        {
          filteredItems.map(item => (
            <Note key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
