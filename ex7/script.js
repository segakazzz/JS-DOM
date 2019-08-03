// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let header = document.querySelector("#section-header")


header.addEventListener('click', function(){

    let section = document.querySelector('#section')
    section.style.display = (section.style.display === "none") ? "block" : "none"
    //section.style.transition = "display none"
    
})