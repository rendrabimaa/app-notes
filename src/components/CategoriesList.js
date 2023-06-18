import Category from "./Category";
import AddCategory from "./AddCategory";

const CategoriesList = ({ categories, handleAddCategory, handleEditCategory, handleDeleteCategory, setCategoryActive }) => {
  return (
    <div className="categories-list">
      {categories.map((category) => (
        <Category
        id={category.id}
        name={category.name}
        handleEditCategory={handleEditCategory}
        handleDeleteCategory={handleDeleteCategory}
        setCategoryActive={setCategoryActive}
        />
      ))}
      <AddCategory handleAddCategory={handleAddCategory} />
    </div>
  )
}

export default CategoriesList;