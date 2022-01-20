const togglebtn=document.getElementById('togglebtn');
const links=document.querySelector('.links');
const addtxt = document.getElementById('addtxt');
const addbtn=document.getElementById('addbtn');
const delbtn=document.getElementById('delbtn');
const searchbtn=document.getElementById('searchbtn');
const mynotes=document.getElementById('notes');
showNotes();


togglebtn.addEventListener('click',()=>{
links.classList.toggle('show-links');
});


addbtn.addEventListener('click',function(){
let notes=localStorage.getItem('notes');
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
notesObj.push(addtxt.value);
localStorage.setItem('notes',JSON.stringify(notesObj));
addtxt.value="";
showNotes();
});

function showNotes(){
    let html="";
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    if(notesObj.length!=0){
        notesObj.forEach((element,index) => {
            html=html + `<div class="card">
            <h2>Note ${index + 1}</h2>
            <p>${element}</p>
            <button class="delbtn" onclick=deleteNote(${index})>Delete Note</button>
        </div>`;
        });
    }
    else{
        html=`<h1>No notes to show.</h1>`;
    }
    mynotes.innerHTML=html;
};

function deleteNote(index){
let notes=localStorage.getItem('notes');
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem('notes',JSON.stringify(notesObj));
showNotes();
}
const search=document.getElementById('searchtxt');

search.addEventListener('input',()=>{
const inputval=search.value.toLowerCase();
console.log(inputval);
const cards=document.getElementsByClassName('card');
Array.from(cards).forEach((card)=>{
const cardtxt=card.getElementsByTagName('p')[0].innerText.toLowerCase();
if(cardtxt.includes(inputval)){
    card.style.display="block";
}
else{
    card.style.display="none";
}
});
});