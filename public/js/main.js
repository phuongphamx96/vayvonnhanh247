/* Global variables and functions */
var ProjectName = (function ($, window, undefined) {
  const heightHeader = $('#header').outerHeight();
  $('#wrapper').css({ 'padding-top': `${heightHeader}px` });

  function _scroll() {
    $('.menu-item a').on('click', function () {
      $('html, body').animate(
        { scrollTop: $(this.hash).offset().top - heightHeader },
        1000,
      );
      return false;
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('#header').addClass('scroll');
      } else {
        $('#header').removeClass('scroll');
      }

      $('.page-section').each(function () {
        const id = $(this).attr('id');
        const scrollDistance = $(window).scrollTop() + heightHeader;
        if ($(this).position().top <= scrollDistance) {
          $('.menu-item a.active').removeClass('active');
          $(`a[href=#${id}]`).addClass('active');
        }
      });
    });
  }

  function _tab() {
    $('.tab-wrapper').each(function () {
      const tabBtn = $(this).find('.tab li');
      const tabContent = $(this).find('.tab-content');

      tabBtn.on('click', function (e) {
        const tab_id = $(this).attr('data-tab');

        tabBtn.removeClass('current');
        tabContent.removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');
      });
    });
  }

  function _inputFocus() {
    $('.input-float').focus(function () {
      $(this).parent().addClass('is-focus');
    });

    $('.input-float').focusout(function () {
      if ($(this).val() === '') $(this).parent().removeClass('is-focus');
    });
  }

  function _closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
        except the current select box:*/
    let x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide');
      }
    }
  }

  function _customSelect() {
    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName('custom-select');
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName('select')[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement('DIV');
      a.setAttribute('class', 'select-selected');
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement('DIV');
      b.setAttribute('class', 'select-items select-hide');
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
        c = document.createElement('DIV');
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener('click', function (e) {
          /*when an item is clicked, update the original select box,
                and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName('select')[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName('same-as-selected');
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute('class');
              }
              this.setAttribute('class', 'same-as-selected');
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener('click', function (e) {
        /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
        e.stopPropagation();
        _closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
      });
    }
    document.addEventListener('click', _closeAllSelect);
  }

  function _resize() {
    $(window).resize(function () {
      const heightHeader = $('#header').outerHeight();
      $('#wrapper').css({ 'padding-top': `${heightHeader}px` });
    });
  }

  return {
    init: function () {
      _scroll();
      // _tab();
      _inputFocus();
      _customSelect();
      _resize();
    },
  };
})(jQuery, window);

jQuery(document).ready(function () {
  ProjectName.init();

  $('#submit').click(function () {
    let amount = $('#amount2').val();
    let years = $('#years').val();
    let laisuat = $('#laisuat').val();

    if (amount === '' || years === '' || years === 0) {
      return;
    }

    let months = years * 12;
    amount = amount.replaceAll(',', '');
    amount = amount.replaceAll('.', '');

    amount = parseInt(amount);

    let lai = Math.round((amount * laisuat) / 100 / 12);
    let goc = Math.round(amount / months);
    let total = lai + goc;

    $('#dau-ky').html(amount.toLocaleString('en-US'));
    $('#tra-goc').html(goc.toLocaleString('en-US'));
    $('#tra-lai').html(lai.toLocaleString('en-US'));
    $('#total').html(total.toLocaleString('en-US'));

    $('#loan-result').css('display', 'block');
  });

  $('#amount2').on('keyup', function () {
    var n = parseInt($(this).val().replace(/\D/g, ''), 10);
    $(this).val(n.toLocaleString('en-US'));
    //do something else as per updated question
  });
});
