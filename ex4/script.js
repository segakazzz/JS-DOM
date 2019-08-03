// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

let button = document.querySelector('#myButton')
let boxes = document.querySelectorAll('.box')


button.addEventListener('click', function(){
    boxes.forEach(function(el){
        console.dir(el)
        el.style.backgroundColor = "blue"
    })
})


