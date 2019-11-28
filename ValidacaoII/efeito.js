/**
 * Efeito fade para destacar uma imagem
 * Exemplo de uso de funções od Jquery se comportando com if else
 * @author André Carpio
 */

$(document).ready(function(){
    $('ul.Destaque li img').hover (function(){
      $('ul.Destaque li img').not(this).stop().fadeTo(1,0.1)	
    },function(){
        $('ul.Destaque li img').stop().fadeTo(100,1)
    })
  })
  /*hover - 
    not(this) - seleciona somente a imagem que o mouse passar
    fadeTo(/*( milisegundo , opacidade)) - tempo e opacidade que será apresentado as outras imagens
    stop() - para quando o mouse não seleciona a imagem 

    */