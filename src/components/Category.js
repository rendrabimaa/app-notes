import React from "react";
import { useState } from "react";
import { MdDeleteForever, MdOutlineModeEditOutline } from 'react-icons/md';
import { Link, useNavigate  } from 'react-router-dom';
import useInput from "../hooks/useInput";

const Category = ({id, name, handleEditCategory, handleDeleteCategory, setCategoryActive}) => {
  const navigate = useNavigate();

  const [editActive, setEditActive] = useState(false);
  const [newName, setNewName] = useInput(name);

  function handleBtnEditCategory() {
    if (editActive) {
      return setEditActive(false);
    }
    setEditActive(true);
  }
  
  function handleBtnCancel() {
    setEditActive(false);
  }

  function handleBtnSave() {
    handleEditCategory(newName, id, setEditActive);
  }

  function handleViewCategory(id) {
    setCategoryActive(id);
    navigate('/notes');
  }

  if (editActive) {
    return (
      <div className="category new">
        <textarea
          rows='8'
          cols='10'
          placeholder='Type to add a category...'
          value={newName}
          onChange={setNewName}
        ></textarea>
        <div className="category-footer">
          {/* <small>{characterLimit - categoryName.length} remaining</small> */}
          {/* <button className="save" onClick={handleSaveClick}>Save</button> */}
          <button className="save" onClick={handleBtnCancel}>Cancel</button>
          <button className="save" onClick={handleBtnSave}>Save</button>
        </div>
      </div>
    )
  }
  return (
    <div className="category">
      <div className='title'>
        <button onClick={() => handleViewCategory(id)}>{name}</button>
      </div>
      <div className="category-footer">
        <MdOutlineModeEditOutline className='delete-icons' size='1.3em' onClick={handleBtnEditCategory} />
        <MdDeleteForever
          onClick={() => handleDeleteCategory(id)}
          className='delete-icons' 
          size='1.3em' />
      </div>
    </div>
  )
}

export default Category;