$(document).ready(function(){
    $('#btnPensar').click(function(){
        $('.brazo1').css({
            transform: 'rotate(-75deg)'
        });
        $('.brazo2').css({
            transform: 'rotate(75deg)'
        });
        $('.ojo1').css({
            transform: 'rotate(-50deg)'
        });
        $('.ojo2').css({
            transform: 'rotate(50deg)'
        });
    });
    $('#btnSaltar').click(function() {
        $("#contenido").animate({ top: '-=100px' }, 100)
        .animate({ top: '+=100px' }, 100);
    });
    $('#btnAtur').click(function(){
        $('.ojo1').css({
            transform: 'rotate(300deg)'
        });
        $('.ojo2').css({
            transform: 'rotate(160deg)'
        })
        $('.brazo1 , .brazo2').css({
            transform: 'rotate(50deg)'
        })
    });
    $('#btnEscapar').click(function() {
        $('#contenido').fadeOut(200)
    });
})

function pesta() {
  
    $("img#pikaOjo1, img#pikaOjo2").css({
         opacity: 0
         });
  
    
    setTimeout(function() {
        $("img#pikaOjo1, img#pikaOjo2").css({ 
            opacity: 1 
        });}, 100);
  }
  
  setInterval(pesta, 2000);


 