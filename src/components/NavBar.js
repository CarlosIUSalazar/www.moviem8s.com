import React, { useState } from "react";
import Deck from "./Deck"
import Table from "./Table"
import Button from "./Button"
import "../styles/NavBar.css"

function NavBar(){

    const [view, setView] = useState("DeckView")

    function swapViews(){
        if (view === "DeckView"){
            setView("TableView")
        } else if (view === "TableView") {
            setView("TableView")
        }
    }



///////////////////RENDER SECTION//////////////////

if (view === "DeckView"){
    return (     
        <>
        
        <Deck setView = {setView}/>
        <button className="ButtonDiv" onClick={() => setView("TableView")}>View Saved Movies</button>
        </>
    );
    }
    else if (view === "TableView"){
        return (
            <Table setView = {setView}/>
        )
    }
    }
    export default NavBar;
