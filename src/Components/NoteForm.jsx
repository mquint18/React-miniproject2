import { useState } from "react";
import NewInput from "./NewInput";
import Button from "./Button";
import NoteCard from "./NoteCard";

function NoteForm() {

    const [note, setNote] = useState({
        title: "",
        message: ""
    })

    const [notes, setNotes] = useState([]);

    function handleChange(e) {
        setNote({
            ...note,
            [e.target.name]: e.target.value
            });
        }

     function handleSubmit(e) {
        e.preventDefault();
        AddNote();
        }

    function AddNote(){
        setNotes([...notes, note]);
        setNote({
            title: "",
            message: ""
        })
    }

    function DeleteNote(index){
        const updatedNotes = notes.filter(
            (_, i) => i !==index
        );
        setNotes(updatedNotes);
    }

    return(
        <>
        <section>
            <form  
                onSubmit={handleSubmit}
                className="note-form"
                 > 
                <NewInput
                    name= "title"
                    placeholder="Note Title"
                    value= {note.title}
                    onChange={handleChange}
                    />

                <NewInput
                    name= "message"
                    placeholder= "Type Your Note Here"
                    value={note.message}
                    onChange={handleChange}
                    multiline={true}
                    />

                <Button
                    text = "Post Note"
                    onClick={AddNote}
                    />

            </form>

        </section>

        <section>
            <div className="note-cards">
                {notes.map((card, index) => (
                    <NoteCard
                        key={index}
                        note = {card}
                        onDelete={() => DeleteNote(index)}
                    />
                ))}

            </div>

        </section>

        </>
    )
}

export default NoteForm;