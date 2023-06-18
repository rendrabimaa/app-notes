import React from "react";
import NavigationLogin from "../components/NavigationLogin";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { getCategories, getNotes, deleteNote } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import { sweetAlertSuccess, sweetConfirm } from "../utils/sweet-alert";

function NotesPage({ user, setUser, categoryActive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  const [notes, setNotes] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [category, setCategory] = React.useState(categoryActive);
  const [keyword, setKeyword] = React.useState(defaultKeyword || "");

  const options = [
    { value: 'all', label: 'All' }
  ]

  React.useEffect(() => {
    async function fetchNotes() {
      const { data } = await getNotes();

      setNotes(data);
    }
    async function fetchCategories() {
      const { data } = await getCategories();

      setCategories(data);
    }
    fetchNotes();
    fetchCategories();
  }, []);

  async function onDeleteHandler(id) {
    if (!(await sweetConfirm())) {
      return;
    }

    await deleteNote(id);
    
    const { data } = await getNotes();

    setNotes(data);
    sweetAlertSuccess('Your note has been deleted', 'Deleted!');
  }

  function onKeywordChangeHandler(event) {
    setKeyword(event.target.value);
    changeSearchParams(event.target.value);
  }

  function onSelectChangeHandler(event) {
    setCategory(event.value);
  }

  let printElementNotes = <p>Loading...</p>;

  if (notes !== null) {
    if (notes.length === 0) {
      printElementNotes = <p>Add or Choose a Category to add a new Note!</p>; 
    } else {
      let newNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
      });
      if (category !== "all") {
        newNotes = newNotes.filter((note) => {
          return note.category_id === category;
        });
      }

      if (newNotes.length === 0) {
        printElementNotes = <p>Empty</p>; 
      } else {
        printElementNotes = (
          <>
            {newNotes.map((note) => (
              <NoteItem key={note.id} id={note.id} title={note.title} summary={note.summary} time={note.created_at} onDelete={onDeleteHandler} />
            ))}
          </>
        )
      }
    }
  }

  let printElementSelect = (
    <Select 
      options={options} 
      // defaultKeyword="asd"
      // defaultValue={options.filter(option => option.value === categoryActive)[0]} 
      isDisabled={true}
      isLoading={true}
      className="react-select-container" 
      
    />
  );

  if (categories !== null) {
    for (let i = 0; i < categories.length; i++) {
      options.push({value: categories[i].id, label: categories[i].name})
    }

    printElementSelect = (
      <Select 
        options={options} 
        value={options.filter(option => option.value === category)[0]} 
        onChange={onSelectChangeHandler}
        isSearchable={false}
        className="react-select-container" 
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'gray',
            primary50: '#fff',
            primary: 'black',
          },
        })}
      />
    )
  }

  return (
    <>
      <NavigationLogin user={user} setUser={setUser} />
      <div className="notes-page-container">
        <div className="search-container">
          <input type="text" placeholder="Search.." className="search" value={keyword} onChange={onKeywordChangeHandler} />
        </div>
        <div className="select-add-container">
          <div className="select-container">
            <p className="cat-text"><b> Category</b></p>
            {printElementSelect}
          </div>
          <div className="add-container">
            <Link to="/notes/add"><i class="fa-solid fa-plus"></i> Add new note</Link>
          </div>
        </div>
        <div className="notes-container">
          {printElementNotes}
          {/* <NoteItem title={'title'} time={'18 November 2022'} summary={'Ini adalah summary Ini adalah summary Ini adalah summary'}  />
          <NoteItem title={'title'} time={'18 November 2022'} summary={'Ini adalah summary'}  />
          <NoteItem title={'title'} time={'18 November 2022'} summary={'Ini adalah summary'}  /> */}
        </div>
      </div>
    </>
  )
}

export default NotesPage;