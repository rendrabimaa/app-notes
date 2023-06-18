import React from "react";
import DetailNote from "../components/DetailNote";
import NavigationLogin from "../components/NavigationLogin";

function DetailNotePage({ user, setUser }){
  return(
    <>
      <NavigationLogin user={user} setUser={setUser} />
      <DetailNote/>
    </>
  )
}

export default DetailNotePage;