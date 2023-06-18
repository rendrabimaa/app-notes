import React from "react";
import AddNote from "../components/AddNote";
import NavigationLogin from "../components/NavigationLogin";


function AddNotePage({ user, setUser }){
  return(
    <>
      <NavigationLogin user={user} setUser={setUser} />
      <AddNote/>
    </>
  )
}

export default AddNotePage;