import { useState } from 'react';

export default function App() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleClick = () => {  
        if (todo !== "" && !list.includes(todo)) {
            if (editIndex >= 0) {
                const updatedList = [...list];
                updatedList[editIndex] = todo;
                setList(updatedList);
                setEditIndex(-1);
            } else {
                setList(prev => [...prev, todo]);
            }
            setTodo('');
        }  
    };

    const handleEdit = (index) => {
        setTodo(list[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    };

    return <>
        <input 
            type='text'
            value={todo}
            placeholder='todos....'
            onChange={handleChange}
        />
        <button onClick={handleClick}>{editIndex >= 0 ? 'Update' : 'Add'}</button>
        
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
}
