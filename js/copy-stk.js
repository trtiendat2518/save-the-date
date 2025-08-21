// Copy STK to clipboard with feedback

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.copy-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const stk = btn.getAttribute('data-stk');
      if (stk) {
        navigator.clipboard.writeText(stk).then(function() {
          btn.textContent = '✔';
          btn.classList.add('copied');
          setTimeout(function() {
            btn.textContent = '📋';
            btn.classList.remove('copied');
          }, 1200);
        });
      }
    });
  });
});
