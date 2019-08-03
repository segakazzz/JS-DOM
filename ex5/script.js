// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp



let button = document.querySelector('#myButton')
button.addEventListener('click', function(){
    let newBox = document.createElement('div')
    newBox.className = "box"
    document.querySelector('#boxContainer').appendChild(newBox)
})