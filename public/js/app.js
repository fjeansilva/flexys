(function(){
  document.querySelector('.header_hamburguer').addEventListener('click', function(e){
    document.querySelector('.header_menu').classList.toggle('open');
    e.stopPropagation();
    console.log('asdfas');
  });
});
