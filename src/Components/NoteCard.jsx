import Button from "./Button"


function NoteCard({note, onDelete}) {

    return (
        <section className="note-card">
            <h2 className="note-name">
                {note.title}
            </h2>

            <p> {note.message} </p>

            <Button
            text = "Delete Note"
            onClick={onDelete}/>

        </section>
    )

}

export default NoteCard;