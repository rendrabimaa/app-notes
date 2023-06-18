import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { editNotes, postNotes } from "../utils/api";
import useInput from "../hooks/useInput";
import Select from 'react-select'
import { getCategories, getNotes } from "../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { sweetAlertError, sweetAlertSuccess } from "../utils/sweet-alert";

let clicked = false;
function blurText(){
  if (!clicked){
    clicked = true;
    document.getElementById("blurbtn").innerHTML = "Unblur Text"
    document.getElementById("note-columns-note").style.filter="blur(5px)";
    document.getElementById("note-summary").style.filter="blur(5px)";   
  }
  else{
    clicked = false;
    document.getElementById("blurbtn").innerHTML = "Blur Text"
    document.getElementById("note-columns-note").style.filter="none";
    document.getElementById("note-summary").style.filter="none";
  }
}

const DetailNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const [title, handleTitleChange, setTitle] = useInput("");
  const [main, handleMainChange, setMain] = useInput("");
  const [cue, handleCueChange, setCue] = useInput("");
  const [summary, handleSummaryChange, setSummary] = useInput("");
  const [notes, setNotes] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [category, setCategory] = React.useState("none");

  React.useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategories();

      setCategories(data);
    }

    async function fetchNotes() {
      const { data } = await getNotes();

      const newData = data.filter((note) => {
        return note.id === id;
      });

      if (newData.length === 1) {
        setTitle(newData[0].title);
        setMain(newData[0].main);
        setCue(newData[0].cue);
        setSummary(newData[0].summary);
        setCategory(newData[0].category_id);
      } else {
        document.querySelector('.addnote-page').innerHTML = '<p>Tidak ketemu</p>'
      }

      setNotes(data);
    }

    fetchCategories();
    fetchNotes();
  }, []);

  const options = [
    { value: 'none', label: 'None' }
  ]

  let printElementSelect = (
    <Select 
      options={options} 
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
        isSearchable={true}
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

  function onSelectChangeHandler(event) {
    setCategory(event.value);
  }

  async function onSaveNoteHandler() {
    const { error, message } = await editNotes({
      title,
      cue,
      main,
      summary,
      categoryId: category,
    }, id);

    if (!error) {
      navigate('/');
      return sweetAlertSuccess("Your note is modified", "Success!");
    }

    sweetAlertError(message);
  }; 

  return (
    <>
      <section className="addnote-page" ref={componentRef}>
        <div className="select-add">
          <h1>CATEGORY</h1>
          {printElementSelect}
        </div>
        <div className="container-addnote">
          <div className="title-addnote" >
            <input type="text" name="titlenote" id="titlenote" className="input-field" placeholder="Title" value={title} onChange={handleTitleChange} />
            <label htmlFor="titlenote" className="input-label">Title</label>
          </div>
          <div className="note-columns" id="note-columns">
            <textarea id="note-columns-note" name="columns-note" className="input-notee" rows="15" cols="50" value={main} onChange={handleMainChange} />
            <label htmlFor="columns-note" className="input-label-note">Notes </label>
          </div>
          <div className="cue-columns">
            <textarea id="cue-columns-note" name="cue-columns-note" className="input-cue" rows="15" cols="50" value={cue} onChange={handleCueChange} />
            <label htmlFor="cue-columns-note" className="input-label-cue">Cue</label>
          </div>
          <div className="summary">
            <div className="summary-note">
              <textarea id="note-summary" type="text" name="summarynote" className="input-summary" placeholder="Summary" rows="8" value={summary} onChange={handleSummaryChange} />
              <label htmlFor="summarynote" className="input-label-summary">Summary</label>
            </div>
          </div>
          <div className="button-sec">
            <div>
              <button className="note-button" id="blurbtn" onClick={blurText}>Blur Text</button>
              <button className="note-button" onClick={onSaveNoteHandler}> Save Note </button>
              <button className="note-button" onClick={handlePrint}> Export to PDF </button>    
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default DetailNote;