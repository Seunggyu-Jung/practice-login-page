let diary = JSON.parse(localStorage.getItem("diary"));
diary = diary ?? [];


function saveNote() {
    const title = document.getElementsById('title').value;
    const content = document.getElementById('content').value;

    diary.push({ title, content, len: diary.length});

    localStorage.setItem("diary", JSON.stringify(diary));
    render();
}


function render() {
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    for (const item of diary) {
        
    }

}