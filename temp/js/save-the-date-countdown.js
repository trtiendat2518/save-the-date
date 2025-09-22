// Countdown to 25/01/2026
(function() {
  var deadline = new Date('2026-01-25T00:00:00+07:00').getTime();
  function updateCountdown() {
    var now = new Date().getTime();
    var t = deadline - now;
    if (t < 0) t = 0;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById('countdown-days').textContent = days;
    document.getElementById('countdown-hours').textContent = ('0' + hours).slice(-2);
    document.getElementById('countdown-minutes').textContent = ('0' + minutes).slice(-2);
    document.getElementById('countdown-seconds').textContent = ('0' + seconds).slice(-2);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
