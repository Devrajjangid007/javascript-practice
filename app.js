let h1 = document.querySelectorAll('h1')

h1.forEach(h=>{
    h.addEventListener('click',function(){
        console.log(h)
    })
})