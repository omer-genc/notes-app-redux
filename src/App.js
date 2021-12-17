import './App.scss';
function App() {
  return (
    <div className='app' >
      <div className='header' >
        <h1>NotesApp</h1>
      </div>

      <div className='search-box'>
        <input type="text" placeholder="Search..." />
      </div>

      <div className='add-note-box' >
        <textarea >

        </textarea>
        <div className='add-note-buttons'>
          <div className='select-color'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='add-button'>
            <button>Add</button>
          </div>

        </div>
      </div>
      <div className='notes-box'>
        <div className='note' >

        </div>
        <div className='note' >

        </div>
      </div>
    </div>
  );
}

export default App;
