function goBack() {
    window.history.back();
}

// simple counter animation that triggers on load
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const step = Math.max(1, Math.floor(target / 200)); // speed control
    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    };
    update();
  });
});