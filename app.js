var Name = document.getElementById("user")
Name.addEventListener("load",myFunction())

function myFunction() {
  Name.innerHTML = "Sharu";
}
 var button1 = document.getElementById("btn-click")
button1.addEventListener('click',changeBackground)
 function changeBackground(){
     button1.style.backgroundColor = "red"
 }

 var button2 = document.getElementById("build-button")
 button2.addEventListener("click",makeSentence)
 function makeSentence(){
    var noun= document.getElementById("noun").value
    var verb = document.getElementById("verb").value
    var adverb = document.getElementById("adverb").value
    var sentence = `${noun} ${verb} ${adverb}`;
    document.getElementById('statement').textContent = sentence;
    
 }
 var grandparent = document.getElementById("grandparent")
 var parent = document.getElementById("parent")
 var child = document.getElementById("child")

 grandparent.addEventListener('click',e =>{
    console.log("Grandparent Clicked")
 },{capture:true})

 parent.addEventListener('click',e =>{
    console.log("Parent Clicked")
 },{capture:true})

 child.addEventListener('click',e =>{
       console.log("Child Clicked")
 }
 )
 var blazer = document.getElementById("blazers")
 blazer.addEventListener('click',e =>{
    console.log(e.target.id)
 })

