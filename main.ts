const clock = <HTMLSpanElement> document.getElementById('clock');

setInterval(() => {
    const date: Date = new Date();

    clock.innerText = date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}, 1000);
