(function() {
    'use strict';
    var currentVal = getRandomInt(80, 100),
        counterBlock = document.querySelector("#lastPlace"),
        element = $('.paymant__current'),
        sum = 0,
        randomInt = 5,
        popup = true,
        access = true,
        form = document.querySelectorAll(".form1"),
        currentDate = new Date();

    // console.log(currentDate.getDate());
    var $project = $(".paymant"),
        $main = $(".paymant__main"),
        $title = $(".paymant__title-wrap"),
        $titleMain = $(".paymant__title"),
        $titleSecond = $(".paymant__descr-title"),
        $projects = $('.paymant__process'),
        $warrning = $('.paymant__descr-warning'),
        $monay = $('.paymant__descr-money'),
        $circle1 = $('.circle-1'),
        $circle2 = $('.circle-2'),
        $circle3 = $('.circle-3'),
        $projectsImageBefore = CSSRulePlugin.getRule(".circle-1:before"),
        $projectsCountAfter = CSSRulePlugin.getRule("paymant__current:after"),
        $text1 = $('.text-1'),
        $text2 = $('.text-2'),
        $text3 = $('.text-3'),
        $dot1 = $(".dot-1 .wrapper"),
        $dot2 = $(".dot-2 .wrapper"),
        $form = $(".paymant__form");

    var tlProject = new TimelineMax({
        repeat: 0,
        repeatDelay: 2
    });

    window.odometerOptions = {
        duration: 3000
    }

    localStorage.getItem('lastChance') && localStorage.getItem('lastDate') == currentDate.getDate() ? currentVal = localStorage.getItem('lastChance') : currentVal;
    LastPlace();
    loop();

    form.forEach(function(elem) {
        elem.addEventListener("submit", function(event) {
            if (access) {
                event.preventDefault();
                insertParam('email', elem.elements[0].value)

                mainAnimation();
                access = false;
            }
        });
    });

    $('.btn-access').on('click touch', function() {
        mainAnimation();
    })

    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });


    function loop() {
        var rand = 5;
        if (currentVal <= 2) {
            clearTimeout(timeLine);
            return;
        } else if (currentVal < 5) {
            rand = getRandomInt(40, 70);
        } else if (currentVal < 15) {
            rand = getRandomInt(20, 30);
        } else if (currentVal < 50) {
            rand = getRandomInt(10, 20);
        } else if (currentVal <= 100) {
            rand = getRandomInt(3, 10);
        }
        var timeLine = setTimeout(function() {
            LastPlace();
            loop();
        }, rand * 1e3);
    };

    function addText() {
        for (var i = 0; i < arguments.length; i += 2) {
            // console.log(arguments[i+1]);
            arguments[i + 1].text(arguments[i]);
        }
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    function LastPlace() {
        currentVal <= 2 ? currentVal : currentVal = currentVal - 1;
        counterBlock.innerHTML = currentVal;
        localStorage.setItem('lastChance', currentVal);
    };

    var randOneTime = 0;
    var randNum = getRandomInt(0, 4);

    function tick(count, steps) {
        let rands = randOneTime == randNum ? getRandomInt(-125, 0) : getRandomInt(-125, 600);
        randOneTime++
        var object = {
            add: rands,
            counter: count,
            timer: function() {
                $circle3.css('left', -100 + 100 / steps * this.counter + 'px');
                sum += this.add;
                element.html(sum + '$');
                if (this.add >= 0) {
                    element.attr('data-money', '+' + this.add + '$');
                    if (element[0].classList.contains("paymant__current_minus")) {
                        element[0].classList.toggle('paymant__current_minus');
                    }
                } else {
                    element.attr('data-money', this.add + '$');
                    if (!element[0].classList.contains("paymant__current_minus")) {
                        element[0].classList.toggle('paymant__current_minus');
                    }
                }
                if (sum >= 0) {
                    if (element[0].classList.contains("paymant__sum_minus")) {
                        element[0].classList.toggle('paymant__sum_minus')
                    }
                } else {
                    if (!element[0].classList.contains("paymant__sum_minus")) {
                        element[0].classList.toggle('paymant__sum_minus')
                    }
                }
                if (count == steps) {
                    setTimeout(function() {
                        element.attr('data-money', '');
                    }, 1500)
                }
            }
        }
        setTimeout(object.timer.bind(object), 2e3 * count);
    };

    function addMoney(count) {
        for (var i = 1; i <= count; i++) {
            tick(i, count);
        }
        element.innerHTML = count;
    };

    function insertParam(key, value) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);

        var s = document.location.search;
        var kvp = key + "=" + value;

        var r = new RegExp("(&|\\?)" + key + "=[^\&]*");

        s = s.replace(r, "$1" + kvp);

        if (!RegExp.$1) {
            s += (s.length > 0 ? '&' : '?') + kvp;
        };

        window.history.replaceState({}, document.title, "/" + s);
        //again, do what you will here
        // document.location.href = s;
    };

    setTimeout(function() {
        if (localStorage.getItem('sumMoney')) {
            odometer.innerHTML = parseInt(localStorage.getItem('sumMoney'));

        } else {
            odometer.innerHTML = getRandomInt(100000, 149999);
        }
    }, 0);

    setInterval(function() {
        odometer.innerHTML = +odometer.odometer.value + getRandomInt(300, 5000);

        if (odometer.odometer.value > 989999) {
            odometer.innerHTML = getRandomInt(100000, 149999);
        }
        // console.log(odometer.odometer.value);

        localStorage.setItem('sumMoney', odometer.odometer.value);
    }, getRandomInt(10, 60) * 1e3)
})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgY3VycmVudFZhbCA9IGdldFJhbmRvbUludCg1MCwxMDApO1xuICB2YXIgY291bnRlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXN0UGxhY2VcIik7XG4gIC8vIHZhciBvZG9tZXRyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29kb21ldGVyJyk7XG4gIFxuICBMYXN0UGxhY2UoKTtcbiAgLy8gY291bnRlcigpO1xuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICB9XG4gIGZ1bmN0aW9uIExhc3RQbGFjZSgpIHtcbiAgICBjdXJyZW50VmFsID0gY3VycmVudFZhbCAtIDE7XG4gICAgY291bnRlckJsb2NrLmlubmVySFRNTCA9IGN1cnJlbnRWYWw7XG4gIH1cbiAgLy8gdmFyIG9kID0gbmV3IE9kb21ldGVyKHtcbiAgLy8gICBlbDogb2RvbWV0cixcbiAgLy8gICB2YWx1ZTogZ2V0UmFuZG9tSW50KDEwMDAwMCwgMTk5OTk5KSxcbiAgXG4gIC8vICAgLy8gQW55IG9wdGlvbiAob3RoZXIgdGhhbiBhdXRvIGFuZCBzZWxlY3RvcikgY2FuIGJlIHBhc3NlZCBpbiBoZXJlXG4gIC8vICAgLy8gZm9ybWF0OiAnJyxcbiAgLy8gICAvLyB0aGVtZTogJ2RpZ2l0YWwnXG4gIC8vIH0pO1xuICB3aW5kb3cub2RvbWV0ZXJPcHRpb25zID0ge1xuICAgIGR1cmF0aW9uOiAzMDAwXG4gIH1cbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIG9kb21ldGVyLmlubmVySFRNTCA9IGdldFJhbmRvbUludCgxMDAwMDAsIDE0OTk5OSk7XG4gICAgY29uc29sZS5kaXIob2RvbWV0ZXIub2RvbWV0ZXIpO1xufSwwKTtcblxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIG9kb21ldGVyLmlubmVySFRNTCA9ICtvZG9tZXRlci5vZG9tZXRlci52YWx1ZSArIGdldFJhbmRvbUludCgzMDAsIDUwMDApO1xuICAgIC8vIGNvbnNvbGUubG9nKCtvZG9tZXRlci5vZG9tZXRlci52YWx1ZSArIGdldFJhbmRvbUludCgxMDAsIDUwMCkpO1xuICAgIGlmKG9kb21ldGVyLm9kb21ldGVyLnZhbHVlID4gOTcwMDAwKSB7XG4gICAgICBvZG9tZXRlci5pbm5lckhUTUwgPSBnZXRSYW5kb21JbnQoMTAwMDAwLCAxNDk5OTkpO1xuICAgIH1cbiAgfSxnZXRSYW5kb21JbnQoMTAsIDYwKSoxZTMpXG5cbiAgJCgnYVtocmVmKj0jXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcH0sIDUwMCwgJ2xpbmVhcicpO1xuICB9KTtcblxuICAoZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB2YXIgcmFuZCA9IDU7XG4gICAgaWYgKGN1cnJlbnRWYWwgPT09IDIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lTGluZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbnRWYWwgPCA1KSB7XG4gICAgICByYW5kID0gZ2V0UmFuZG9tSW50KDMwLDYwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VycmVudFZhbCA8IDE1KSB7XG4gICAgICByYW5kID0gZ2V0UmFuZG9tSW50KDEwLDIwKTtcbiAgICB9XG4gICAgZWxzZSBpZihjdXJyZW50VmFsIDwgNTApIHtcbiAgICAgIHJhbmQgPSBnZXRSYW5kb21JbnQoMyw2KTtcbiAgICB9XG4gICAgZWxzZSBpZihjdXJyZW50VmFsIDw9IDEwMCkge1xuICAgICAgcmFuZCA9IGdldFJhbmRvbUludCgxLDcpO1xuICAgIH1cbiAgICB2YXIgdGltZUxpbmUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgTGFzdFBsYWNlKCk7XG4gICAgICAgICAgICBsb29wKCk7ICBcbiAgICB9LCByYW5kKjFlMyk7XG4gIH0oKSk7XG5cbiAgdmFyICAkcHJvamVjdCA9ICQoXCIucGF5bWFudFwiKSxcbiAgICAgICRtYWluID0gJChcIi5wYXltYW50X19tYWluXCIpLFxuICAgICAgJHRpdGxlID0gJChcIi5wYXltYW50X190aXRsZS13cmFwXCIpLFxuICAgICAgJHRpdGxlTWFpbiA9ICQoXCIucGF5bWFudF9fdGl0bGVcIiksXG4gICAgICAkdGl0bGVTZWNvbmQgPSAkKFwiLnBheW1hbnRfX2Rlc2NyLXRpdGxlXCIpLFxuICAgICAgJHByb2plY3RzID0gJCgnLnBheW1hbnRfX3Byb2Nlc3MnKSxcbiAgICAgICR3YXJybmluZyA9ICQoJy5wYXltYW50X19kZXNjci13YXJuaW5nJyksXG4gICAgICAkbW9uYXkgPSAkKCcucGF5bWFudF9fZGVzY3ItbW9uZXknKSxcbiAgICAgICRjaXJjbGUxID0gJCgnLmNpcmNsZS0xJyksXG4gICAgICAkY2lyY2xlMiA9ICQoJy5jaXJjbGUtMicpLFxuICAgICAgJGNpcmNsZTMgPSAkKCcuY2lyY2xlLTMnKSxcbiAgICAgICRwcm9qZWN0c0ltYWdlQmVmb3JlID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLmNpcmNsZS0xOmJlZm9yZVwiKSxcbiAgICAgICRwcm9qZWN0c0NvdW50QWZ0ZXIgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCJwYXltYW50X19jdXJyZW50OmFmdGVyXCIpLFxuICAgICAgJHRleHQxID0gJCgnLnRleHQtMScpLFxuICAgICAgJHRleHQyID0gJCgnLnRleHQtMicpLFxuICAgICAgJHRleHQzID0gJCgnLnRleHQtMycpLFxuICAgICAgJGRvdDEgPSAkKFwiLmRvdC0xIC53cmFwcGVyXCIpLFxuICAgICAgJGRvdDIgPSAkKFwiLmRvdC0yIC53cmFwcGVyXCIpO1xuXG5cbiAgdmFyIHRsUHJvamVjdCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAwLCByZXBlYXREZWxheToyfSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dCgpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSs9Mil7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1tpKzFdKTtcbiAgICAgICAgYXJndW1lbnRzW2krMV0udGV4dChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICB9XG4vLyAgIHBheW1lbnRcbiAgdmFyIGVsZW1lbnQgPSAkKCcucGF5bWFudF9fY3VycmVudCcpO1xuICB2YXIgc3VtID0gMDtcbiAgdmFyIHJhbmRvbUludCA9IDU7XG4gIGZ1bmN0aW9uIHRpY2soY291bnQsc3RlcHMpIHtcbiAgICAgIHZhciBvYmplY3QgPSB7XG4gICAgICAgICAgYWRkOiBnZXRSYW5kb21JbnQoLTE1MCw2MDApLFxuICAgICAgICAgIGNvdW50ZXI6IGNvdW50LFxuICAgICAgICAgIHRpbWVyOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJGNpcmNsZTMuY3NzKCdsZWZ0JywtMTAwKzEwMC9zdGVwcyp0aGlzLmNvdW50ZXIrJ3B4Jyk7XG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5hZGQ7XG4gICAgICAgICAgICBlbGVtZW50Lmh0bWwoc3VtKyckJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGQgPj0gMCl7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdkYXRhLW1vbmV5JywgJysnK3RoaXMuYWRkKyckJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdkYXRhLWNvbG9yJyxcIiM1MUNGM0FcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ2RhdGEtbW9uZXknLCB0aGlzLmFkZCsnJCcpO1xuICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignZGF0YS1jb2xvcicsJyNGRjM5MzknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNvdW50ID09IHN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ2RhdGEtbW9uZXknLCAnJyk7XG4gICAgICAgICAgICAgICAgfSwxNTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KG9iamVjdC50aW1lci5iaW5kKG9iamVjdCksMmUzKmNvdW50KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRNb25leShjb3VudCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICB0aWNrKGksY291bnQpO1xuICAgIH1cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvdW50O1xuICB9XG4vLyAgIGFkZE1vbmV5KDUpO1xuXG5cbi8vIHRsUHJvamVjdFxuLy8gLnNldChbJHByb2plY3QsJHRpdGxlLCAkbW9uYXldLHthdXRvQWxwaGE6IDB9KTtcbnZhciBwb3B1cCA9IHRydWU7XG4kKCcuYnRuLWFjY2VzcycpLm9uKCdjbGljayB0b3VjaCcsZnVuY3Rpb24oKXtcbiAgbWFpbkFuaW1hdGlvbigpO1xufSlcblxuZnVuY3Rpb24gbWFpbkFuaW1hdGlvbigpe1xuICBpZihwb3B1cCkge1xuICAgIHRsUHJvamVjdFxuICAgICAgLnNldChbJHByb2plY3QsJHRpdGxlLCAkbW9uYXldLHthdXRvQWxwaGE6IDB9KVxuICAgICAgLmZyb21UbygkcHJvamVjdCwgMix7eFBlcmNlbnQ6ICcxMDAnLGF1dG9BbHBoYTogMX0se3hQZXJjZW50OiAnMCcsYXV0b0FscGhhOiAxLCBlYXNlOlBvd2VyNC5lYXNlT3V0fSlcbiAgICAgIC5hZGQoXCJMYXllckluXCIpXG4gICAgICAuZnJvbVRvKCR0aXRsZSwgMSwge2F1dG9BbHBoYTogMCwgeTogJys9MjUnfSx7YXV0b0FscGhhOiAxLCB5OiAnMCcsIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sIFwiTGF5ZXJJblwiKVxuICAgICAgLmFkZCgnVGl0bGUxSW4nKVxuICAgICAgLmZyb21UbygkdGV4dDEsIDAuNSwge2F1dG9BbHBoYTogMH0se2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQn9C+0LTQutC70Y7Rh9C10L3QuNC1XCIsICR0ZXh0MV0sIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ1RpdGxlMUluJylcbiAgICAgIC5hZGQoJ0Rlc2NyMUluJylcbiAgICAgIC50bygkY2lyY2xlMSwgMywge3g6ICcxMDAnLGVhc2U6UG93ZXI0LmVhc2VPdXR9LCdEZXNjcjFJbicpXG4gICAgICAuYWRkKFwiZmlsbFNoYXBlMVwiKVxuICAgICAgLnRvKCR0ZXh0MSwgMC41LCB7YXV0b0FscGhhOiAwLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdmaWxsU2hhcGUnKVxuICAgICAgLmFkZCgnRGVzY3IxT3V0JylcbiAgICAgIC50bygkdGV4dDEsIDAuNSwge2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQk9C+0YLQvtCy0L5cIiwgJHRleHQxXSwgZWFzZTpQb3dlcjQuZWFzZUluT3V0fSwnZmlsbFNoYXBlMSs9MScpXG4gICAgICAuYWRkKCdEZXNjcjFGaW5pc2gnKVxuICAgICAgLnRvKCR0aXRsZSwgMSwge2F1dG9BbHBoYTogMCwgeTogJys9MjUnLGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ0Rlc2NyMUZpbmlzaCcpXG4gICAgICAudG8oJHRpdGxlLCAxLCB7YXV0b0FscGhhOiAxLCB5OiAnMCcsb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQnNCw0LrRgdC40LzQuNC30LDRgtC+0YAg0LDQutGC0LjQstC40YDQvtCy0LDQvVwiLCR0aXRsZU1haW4sXCLQmNC00ZHRgiDQv9C+0LjRgdC6INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0LPQviDQstGF0L7QtNCwINCyINGA0YvQvdC+0LpcIiwgJHRpdGxlU2Vjb25kXSxlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdEZXNjcjFGaW5pc2grPTEuNScpXG4gICAgICAudG8oJGRvdDEsIDAse2NsYXNzTmFtZTogJ3dyYXBwZXIgYW5pbS1kb3QtMScsZWFzZTogUG93ZXIwLmVhc2VOb25lfSwnRGVzY3IxRmluaXNoKz0yLjUnKVxuICAgICAgLnRvKCRkb3QxLDIsIHt9LFwiRGVzY3IxRmluaXNoKz0yLjVcIilcbiAgICAgIC5hZGQoXCJOZXdCbG9ja1wiKVxuXG4gICAgICAuYWRkKFwibG9hZGVyMVwiKVxuICAgICAgLmZyb21UbygkdGV4dDIsIDAuNSwge2F1dG9BbHBoYTogMH0se2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQktGF0L7QtFwiLCAkdGV4dDJdLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdsb2FkZXIxJylcbiAgICAgIC5hZGQoJ0Rlc2NyMkluJylcbiAgICAgIC50bygkY2lyY2xlMiwgMywge3g6ICcxMDAnLGVhc2U6UG93ZXI0LmVhc2VPdXR9LCdEZXNjcjJJbicpXG4gICAgICAuYWRkKFwiZmlsbFNoYXBlMlwiKVxuICAgICAgLnRvKCR0ZXh0MiwgMC41LCB7YXV0b0FscGhhOiAwLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdmaWxsU2hhcGUyJylcbiAgICAgIC5hZGQoJ0Rlc2NyMk91dCcpXG4gICAgICAudG8oJHRleHQyLCAwLjUsIHthdXRvQWxwaGE6IDEsIG9uU3RhcnQ6IGFkZFRleHQsIG9uU3RhcnRQYXJhbXM6W1wi0JPQvtGC0L7QstC+XCIsICR0ZXh0Ml0sIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ2ZpbGxTaGFwZTIrPTEnKVxuICAgICAgXG4gICAgICAuYWRkKCdEZXNjcjJGaW5pc2gnKVxuICAgICAgLnRvKCR0aXRsZSwgMSwge2F1dG9BbHBoYTogMCwgeTogJys9MjUnLGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ0Rlc2NyMkZpbmlzaCcpXG4gICAgICAudG8oJHdhcnJuaW5nLCAxLCB7YXV0b0FscGhhOiAwLGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ0Rlc2NyMkZpbmlzaCcpXG4gICAgICAudG8oJHRpdGxlLCAxLCB7YXV0b0FscGhhOiAxLCB5OiAnMCcsb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQnNCw0LrRgdC40LzQuNC30LDRgtC+0YAg0J/RgNC40LHRi9C70Lgg0LfQsNC/0YPRidC10L1cIiwkdGl0bGVNYWluLFwi0JTQvtC20LTQuNGC0LXRgdGMINC+0LrQvtC90YfQsNC90LjRjyDQv9GA0L7RhtC10YHRgdCwINC30LDRgNCw0LHQvtGC0LrQsFwiLCAkdGl0bGVTZWNvbmRdLGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ0Rlc2NyMkZpbmlzaCs9MS41JylcbiAgICAgIC50bygkZG90MiwgMCx7Y2xhc3NOYW1lOiAnd3JhcHBlciBhbmltLWRvdC0yJyxlYXNlOiBQb3dlcjAuZWFzZU5vbmV9LCdEZXNjcjJGaW5pc2grPTIuNScpXG4gICAgICAudG8oJGRvdDIsMiwge30sXCJEZXNjcjJGaW5pc2grPTIuNVwiKVxuXG4gICAgICAuYWRkKCdUaXRsZTMnKVxuICAgICAgLmZyb21UbygkdGV4dDMsIDAuNSwge2F1dG9BbHBoYTogMH0se2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQotC+0YDQs9C+0LLQu9GPXCIsICR0ZXh0M10sIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ1RpdGxlMycpXG4gICAgICAuZnJvbVRvKCRtb25heSwgMC41LCB7YXV0b0FscGhhOiAwLCBib3R0b206ICcwJ30se2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkTW9uZXksIG9uU3RhcnRQYXJhbXM6W3JhbmRvbUludF0sIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ1RpdGxlMycpXG4gICAgICAuYWRkKCdTdW1FbmQnKVxuICAgICAgLnRvKCR0ZXh0MywgMC41LCB7YXV0b0FscGhhOiAwLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdTdW1FbmQrPTExJylcbiAgICAgIC50bygkdGV4dDMsIDAuNSwge2F1dG9BbHBoYTogMSwgb25TdGFydDogYWRkVGV4dCwgb25TdGFydFBhcmFtczpbXCLQk9C+0YLQvtCy0L5cIiwgJHRleHQzXSwgZWFzZTpQb3dlcjQuZWFzZUluT3V0fSwnU3VtRW5kKz0xMicpXG4gICAgICAuYWRkKCdNYXJrZXRFbmQnKVxuICAgICAgLnRvKCRwcm9qZWN0cywwLjUsIHthdXRvQWxwaGE6IDAsIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ01hcmtldEVuZCcpXG4gICAgICAuYWRkKFwiTWFpbkVuZFwiKVxuICAgICAgLnRvKCR0aXRsZSwwLjUsIHthdXRvQWxwaGE6IDAsIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ01haW5FbmQnKVxuICAgICAgLnRvKCRtb25heSwgMSx7dG9wOiAnMzAlJywgZWFzZTpQb3dlcjQuZWFzZUluT3V0fSwnTWFpbkVuZCcpXG4gICAgICAvLyAudG8oJG1vbmF5LCAxLHtzY2FsZTogJzEuMycsIGVhc2U6UG93ZXI0LmVhc2VJbk91dH0sJ01haW5FbmQrPTEnKVxuICAgICAgLnRvKCRtb25heSwgMSx7dG9wOiAnNSUnLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdNYWluRW5kKz0yJylcbiAgICAgIC5hZGQoXCJGb3JtU3RhcnRcIilcbiAgICAgIC50bygkbWFpbiwgMSx7Y2xhc3NOYW1lOiAncGF5bWFudF9fbWFpbiBwYXltYW50X19tYWluX2Zvcm0nLCBlYXNlOlBvd2VyNC5lYXNlSW5PdXR9LCdGb3JtU3RhcnQnKVxuICAgICAgLy8gLnRvKCRjaXJjbGUzLCAwLjUsIHthdXRvQWxwaGE6IDAsZWFzZTogZWFzZUluT3V0fSwnVGl0bGUzKz0xMCcpXG4gICAgcG9wdXAgPWZhbHNlXG4gIH1cbn1cblxuXG52YXIgYWNjZXNzID0gdHJ1ZTtcbnZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtMVwiKTtcblxuZm9ybS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYoYWNjZXNzKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGluc2VydFBhcmFtKCdlbWFpbCcsZWxlbS5lbGVtZW50c1swXS52YWx1ZSlcblxuICBtYWluQW5pbWF0aW9uKCk7XG4gIGFjY2VzcyA9IGZhbHNlO1xuICB9XG4gIH0pO1xufSk7XG4vLyBjb25zb2xlLmRpcihmb3JtKTtcbn0pKGpRdWVyeSk7XG5mdW5jdGlvbiBpbnNlcnRQYXJhbShrZXksdmFsdWUpXG57XG4gICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7IHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIHZhciBzID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBrdnAgPSBrZXkrXCI9XCIrdmFsdWU7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoXCIoJnxcXFxcPylcIitrZXkrXCI9W15cXCZdKlwiKTtcblxuICAgIHMgPSBzLnJlcGxhY2UocixcIiQxXCIra3ZwKTtcblxuICAgIGlmKCFSZWdFeHAuJDEpIHtzICs9IChzLmxlbmd0aD4wID8gJyYnIDogJz8nKSArIGt2cDt9O1xuXG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgXCIvXCIgKyAgcyk7XG4gICAgLy9hZ2FpbiwgZG8gd2hhdCB5b3Ugd2lsbCBoZXJlXG4gICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHM7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
