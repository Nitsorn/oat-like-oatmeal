// Entering the site

$(document).ready(function(){
  $('.button.entry').click(function(event){
    if ($('#wrapper').css('height') !== '200px') {
      // Closed. Click to open
      $('#nav').css({
        'opacity':'0',
        'width':'30px',
        'height':'30px',
      })
      $('#wrapper').css({
        'height':'200px',
        'padding-top':'170px',
        'box-shadow':'0px',
        'background-color':'transparent',
        'overflow':'hidden',
      });
      $('#oat').css({
        'color': '#69C6D7'
      });
      $('.button.entry').css({
        'height': '100px',
        'width': '100px',
      });
      $('#icons').css({
        'margin-top': '80px',
        'opacity': '0.5'
      });
      $('.left,.right').css({
        'margin-top': '100px',
        'opacity': '0.3'
      })

    } else {
      // Open. Click to close
      $('#nav').css({
        'opacity':'1',
        'height':'200px',
        'width':'40px',
      })
      $('#wrapper').css({
        'height':'80vh',
        'padding-top':'40px',
        'background-color':'#EAE7E7',
        'overflow':'scroll'
      });
      $('#oat').css({
        'color': '#51A4B2'
      });
      $('.button.entry').css({
        'height': '30px',
        'width': '30px',
      });
      $('#icons').css({
        'margin-top': '0px',
        'opacity': '1'
      });
      $('.left,.right').css({
        'margin-top': '0px',
        'opacity': '1'
      })
    }
  })
})
