import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './NodesPage.css';
import { deleteNode, addNode } from '../../reducers/NodesSlice';

export default function NodesPage() {
    const nodes = useSelector((state) => state.nodes);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newNode, setNewNode] = useState({ text: "", category: '' });
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = {
        'Рецепты': '#ffdbdb',
        'Космос' : '#c2efcc',
        'IT' : '#d5ebf0',
    };

    const handleDeleteNode = (id) => {
        dispatch(deleteNode(id));
    };

    const handleAddNode = () => {
        const newId = nodes.length > 0 ? nodes[nodes.length - 1].id + 1 : 1;
        dispatch(addNode({ id: newId, ...newNode }));
        setNewNode({  text: "", category: '' });
        setIsModalOpen(false);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredNodes= selectedCategory ? nodes.filter(node => node.category === selectedCategory) : nodes;

    const NodesCards = () => {
        return filteredNodes.map(node => (
            <div key={node.id} style={{ backgroundColor: categories[node.category]}} className='node'>
                <button onClick={() => handleDeleteNode(node.id)}>х</button>
                <span>{node.text}</span>
            </div>
        ));
    };

    return (
        <div className='container tasks'>
            <div className='buttons-tasks'>
                <button onClick={() => setIsModalOpen(true)}>Добавить заметку</button>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value=''>Все категории</option>
                    {Object.keys(categories).map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className='nodes'>
                <NodesCards />
            </div>
            
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Добавить заметку</h2>
                        <label>
                            Текст:
                            <textarea value={newNode.text} onChange={(e) => setNewNode({ ...newNode, text: e.target.value })} rows='10'></textarea>
                        </label>
                        <label>
                            Категория:
                            <select value={newNode.category} onChange={(e) => setNewNode({ ...newNode, category: e.target.value })}>
                                <option value=''>Все категории</option>
                                {Object.keys(categories).map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </label>
                        
                        <button onClick={handleAddNode}>Добавить</button>
                    </div>
                </div>
            )}
        </div>
    )

}
