const counters = document.querySelectorAll('.counterContainer span');
const container = document.querySelector('.counterContainer');

let activated = false;
let totalSteps = 100; // Menos pasos = animación más rápida

function updateAllCounters() {
    let targetCounts = Array.from(counters, counter => parseInt(counter.dataset.count));
    let stepSizes = targetCounts.map(target => target / totalSteps);
    let currentStep = 0;

    function animate() {
        currentStep++;
        counters.forEach((counter, index) => {
            let value = Math.min(Math.ceil(stepSizes[index] * currentStep), targetCounts[index]);
            counter.innerText = value;
        });

        if (currentStep < totalSteps) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function resetCounters() {
    counters.forEach(counter => {
        counter.innerText = '0';
    });
    activated = false;
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight - 100 && rect.bottom >= 0
    );
}

window.addEventListener("scroll", () => {
    if (isInViewport(container) && !activated) {
        updateAllCounters();
        activated = true;
    } else if (!isInViewport(container) && activated) {
        resetCounters();
    }
});
