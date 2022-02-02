/*** 
 * 
 * This Is only A test
 * 
 * 
 * 
 */

function start(duration) {
    var TotalSeconds = 40;
    var documentWidth = $(document).width();
    var start = Date.now();
    var intervallSetted = null;

    function timer() {

        var diff = duration - (((Date.now() - start) / 1000) | 1);
        var seconds = (diff % 60) | 0;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $('#timer').html("00" + seconds);
        var progressBarwidth = (seconds * documentWidth / TotalSeconds);

        $('#progress').animate({
            width: progressBarwidth + 'px'
        });

        if (diff <= 0) {
            clearInterval(intervallSetted);
        }
    }
    timer();
    intervallSetted = setInterval(timer, 1000);
}
started(40);