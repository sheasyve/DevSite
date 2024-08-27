let count = 0;
const countElement = document.getElementById('count');
const button = document.getElementById('theButton');
button.addEventListener("click", function() {
    count += 1; 
    if(count == 1){
        alert(`You have pressed the button 1 time.`);
    }
    else if (count > 9){
        alert(`You have pressed the button ${count} times. Are you ok?`);
    }
    else{
        alert(`You have pressed the button ${count} times.`);
    }
    countElement.textContent = count;
});
