const nav = document.querySelector('.header')
fetch('/Files/Header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const nav_footer = document.querySelector('.footer')
fetch('/Files/footer.html')
.then(res=>res.text())
.then(data=>{
    nav_footer.innerHTML=data
})