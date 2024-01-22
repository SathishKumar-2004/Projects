//plus button function
var plus=document.querySelector('.plus-btn');
var overlay=document.querySelector('.overlay');
var popup=document.querySelector('.popup');
plus.addEventListener('click',function(){
  overlay.style.display='block';
  popup.style.display='block';
})

//cancel button
var cancel=document.getElementById('cancel-btn');
cancel.addEventListener('click',function(){
  overlay.style.display='none';
  popup.style.display='none';
})

//adding contents

var book_name=document.getElementById('book-name');
var author_name=document.getElementById('author-name');
var book_description=document.getElementById('book-description');
var add=document.getElementById('add-btn');
var container=document.querySelector(".container")

add.addEventListener('click',function(){
  var div=document.createElement("div");
  div.setAttribute('class',"book-container")
  div.innerHTML=`<h2>${book_name.value}</h2>
  <h5>${author_name.value}</h5>
  <p>${book_description.value}
  </p>
  <button id="delete-btn" onclick='dele(event)'>Delete</button>`
  container.append(div)
  overlay.style.display='none';
  popup.style.display='none';
})

//delete
var del=document.getElementById('delete-btn');

function dele(event){
  event.target.parentElement.remove();
}