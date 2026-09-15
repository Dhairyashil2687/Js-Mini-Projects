const btn = document.querySelector('.btn');
const container = document.querySelector('.app');

function createNote(content = "") {
    const note = document.createElement('textarea');
    note.classList.add('note');
    note.placeholder = "Enter Note..";
    note.value = content;

    note.addEventListener('dblclick', () => {
        const cd = confirm("Are you Sure want to Delete ?");
        if(cd){
            note.remove();
            saveNotes();
        }
    });
    note.addEventListener('input', saveNotes);

    container.appendChild(note);

}

function saveNotes() {
    const notes = document.querySelectorAll('.note');
    const data = [];
    notes.forEach(note => data.push(note.value));
    localStorage.setItem('my-notes', JSON.stringify(data));
}

function loadNotes() {
    const saved = JSON.parse(localStorage.getItem('my-notes') || "[]");
    saved.forEach(noteText => createNote(noteText));
}

btn.addEventListener('click', () => createNote());

loadNotes();
