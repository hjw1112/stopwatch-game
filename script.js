document.getElementById('start_options').addEventListener('click', () => {
    console.log('start_options');
    document.getElementById('options').style.display = 'none';
    document.getElementById('game').style.display = 'block';
});

let result;
document.getElementById('start-btn').addEventListener('click', () => {
    console.log('start');
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('stop-btn').style.display = 'block';
    let selected_difficulty = document.querySelector('input[name="difficulty"]:checked');

    if (selected_difficulty && selected_difficulty.value === 'withouttimer') {
        document.getElementById('time').style.display = 'none';
    } else {
        document.getElementById('time').style.display = 'block';
    }

    document.getElementById('stop-btn').disabled = false;
    document.getElementById('start-btn').disabled = true;
    let time = 0;
    const interval = setInterval(() => {
        time += 0.01;
        document.getElementById('time').textContent = time.toFixed(2);
    }, 10);

    document.getElementById('stop-btn').addEventListener('click', () => {
        document.getElementById('stop-btn').style.display = 'none';
        document.getElementById('reset-btn').style.display = 'block';
        clearInterval(interval);
        document.getElementById('start-btn').disabled = false;
        document.getElementById('stop-btn').disabled = true;
        if (time === 10) {
            document.getElementById('result-message').textContent = 'You win!';
        } else {
            result = 10 - time;
            result = Math.floor(result * 100) / 100;
            document.getElementById('result-message').textContent = 'Your time is ' + result + ' seconds off';
        }
        document.getElementById('time').style.display = 'block';
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('time').textContent = '0.00';
    document.getElementById('result-message').textContent = '';
    document.getElementById('reset-btn').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
});
document.getElementById('backtohome').addEventListener('click', ()=>{
    location.reload()
})


