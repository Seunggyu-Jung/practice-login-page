


    const Time = new Date().getFullYear();
    const Month = new Date().getMonth() + 1;
    const Day = new Date().getDate();
    const Week1 = ["일","월","화","수","목","금","토"];
    const NowDate = `${Time}.${Month}.${Day}`;

    const formTitle = document.querySelector(".formTitle");
    formTitle.innerHTML = `${Time}.${Month}.${Day}의 비밀일기`;

function render1() {
    const boxSet = document.querySelector(".boxSet");
    // boxSet.innerHTML = "";

    const article = document.createElement("article");
    boxSet.appendChild(article);
}

const button = document.querySelector("button");
button.addEventListener("click",render1());


let diary = JSON.parse(localStorage.getItem("diary"));
diary = diary ?? [];



render2();


function saveNote() {
    const title = document.getElementsById('title').value;
    const content = document.getElementById('content').value;
    

    

    diary.push({ title, content, NowDate});

    localStorage.setItem("diary", JSON.stringify(diary));
    render2();
}




function render2() {
    const display = document.querySelector("article");
    display.innerHTML = "";

    for (const item of diary) {
        const saveTitle = document.createElement("h3");
        const saveDate = document.createElement("span");
        const saveContents = document.createElement("p");
    
        saveTitle.textContent = item.title;
        saveDate.textContent = item.NowDate;
        saveContents.textContent = item.content;
    
        display.appendChild(saveTitle);
        display.appendChild(saveDate);
        display.appendChild(saveContents);
    }
}






