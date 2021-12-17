import { useDispatch } from 'react-redux';
import { removeNote } from '../../redux/notes/notesSlice';
import './Note.scss';

const Note = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeNote({ id: item.id }));
    };
    return (
        <div className={"note " + item.color}>
            <p>{item.text}
                <span onClick={handleRemove}>X</span>
            </p>

        </div>
    )
}

export default Note;
