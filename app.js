import { db } from "./firebase-config.js";

import {
collection,
addDoc,
getDocs,
query,
orderBy,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const submitBtn =
document.getElementById("submitBtn");

const title =
document.getElementById("title");

const content =
document.getElementById("content");

const ideaList =
document.getElementById("ideaList");

submitBtn.addEventListener("click", addIdea);

async function addIdea(){

if(!title.value || !content.value){
alert("入力してください");
return;
}

await addDoc(
collection(db,"ideas"),
{
title:title.value,
content:content.value,
status:"未検討",
priority:3,
createdAt:serverTimestamp()
}
);

title.value="";
content.value="";

loadIdeas();
}

async function loadIdeas(){

ideaList.innerHTML="";

const q = query(
collection(db,"ideas"),
orderBy("createdAt","desc")
);

const snapshot =
await getDocs(q);

snapshot.forEach(doc=>{

const data = doc.data();

ideaList.innerHTML += `
<div class="idea">
<h3>${data.title}</h3>
<p>${data.content}</p>
<p>状態：${data.status}</p>
</div>
`;

});

}

loadIdeas();
