import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { postNotes } from "../utils/api";
import useInput from "../hooks/useInput";
import CreateableReactSelect from "react-select/creatable";
import { getCategories, postCategories} from "../utils/api";
import { useNavigate } from "react-router-dom";
import { sweetAlertError, sweetAlertSuccess } from "../utils/sweet-alert";
const AddNote = () => {
  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const [title, handleTitleChange] = useInput("");
  const [main, handleMainChange] = useInput("");
  const [cue, handleCueChange] = useInput("");
  const [summary, handleSummaryChange] = useInput("");
  const [categories, setCategories] = React.useState(null);
  const [category, setCategory] = React.useState("none");

  React.useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategories();

      setCategories(data);
    }
    fetchCategories();
  }, []);


  async function addCategory(name) {
    const { error, message } = await postCategories({
      name,
    });
  
    if (!error) {
      const { data } = await getCategories();
  
      setCategories(data);
      return sweetAlertSuccess("Your category is added", "Success!");
    }
  
    sweetAlertError(message);
  }

  function onSelectChangeHandler(event) {
    setCategory(event.value);
  }

  async function onSaveNoteHandler() {
    const { error, message } = await postNotes({
      title,
      cue,
      main,
      summary,
      categoryId: category,
    });

    if (!error) {
      navigate('/');
      return sweetAlertSuccess("Your note is added", "Success!");
    }

    sweetAlertError(message);
  }; 

  return (
    <>
      <section className="addnote-page" ref={componentRef}>
        <div className="select-add">
          <h1>CATEGORY </h1>
          <CreateableReactSelect
            options={categories !== null && categories.map(category => {
              return {label: category.name, value:category.id}
            })}
            onCreateOption={label => {
              addCategory(label)
            }}
            onChange={onSelectChangeHandler}
          />         
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
              <button className="note-button" onClick={onSaveNoteHandler}> Save Note </button>
              <button className="note-button" onClick={handlePrint}> Export to PDF </button>    
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}


export default AddNote;