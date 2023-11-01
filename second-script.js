for(var i=0;i<100;i++){
  var b = document.createElement('div')
  b.innerHTML = '❤️ 🥰'
  b.style.color = 'hsl('+Math.random()*360+'deg, 100%, 50%)'
  b.style.fontWeight = Math.floor(Math.random()*10)*100
  document.body.appendChild(b)
}

function spin() {
  var b = document.querySelectorAll('div')
  let num = Math.floor(Math.random()*b.length)
  b[num].classList.add('spin')
  b[num].onanimationend = function() {
    b[num].classList.remove('spin')
  }
  
  setTimeout(spin, 100)
}

function moveLight(e){
  var x = e.clientX / window.innerWidth * 100 + '%'
  var y = e.clientY / window.innerHeight * 100 + '%'
  document.documentElement.style.setProperty('--loc', x+' '+y)
}

spin()
window.addEventListener('mousemove', moveLight)