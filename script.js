document.getElementById('start-btn').addEventListener('click', () => {
    console.log('start');
    document.getElementById('stop-btn').disabled = false;
    document.getElementById('start-btn').disabled = true;
    let time = 0;
    const interval = setInterval(() => {
        time += 0.01;
        document.getElementById('time').textContent = time.toFixed(2);
    }, 10);

    document.getElementById('stop-btn').addEventListener('click', () => {
        clearInterval(interval);
        document.getElementById('start-btn').disabled = false;
        document.getElementById('stop-btn').disabled = true;
    });
    if (time === 10) {
        result = 10 - time;
        document.getElementById('result-message').textContent = 'You win!';
    } else {
        document.getElementById('result-message').textContent = 'your time is ' + result + ' seconds off';
    }
});