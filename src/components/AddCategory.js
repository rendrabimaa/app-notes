import { useState } from "react";

const AddCategory = ({ handleAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >= 0){
      setCategoryName(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if(categoryName.trim().length >= 0) {
      handleAddCategory(categoryName, setCategoryName);
    }
  }

  return (
    <div className="category new">
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a category...'
        value={categoryName}
        onChange={handleChange}
      ></textarea>
      <div className="category-footer">
        <small>{characterLimit - categoryName.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddCategory;