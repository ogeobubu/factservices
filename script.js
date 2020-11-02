window.onscroll = function(){
  myFunction()
}

function myFunction(){
  let sticky = document.getElementById('main').offsetTop
  if(window.pageYOffset > sticky){
    document.getElementById('main').classList.add('sticky')
  }
  else{
    document.getElementById('main').classList.remove('sticky')
  }
}
