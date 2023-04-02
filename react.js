
const iosOk = document.getElementById('ios-ok');
const create_r = document.getElementById('waiterBtn');

const successView = document.getElementById('success_main');
const dashboardView = document.getElementById('dashboard_main');
const waiterView = document.getElementById('butler');

create_r.addEventListener('click', function (){
    waiterView.style.display = 'none';

    var cafe = document.getElementById('cafes').value;
    var amt = document.getElementById('cashbar').value;
    console.log(cafe);
    console.log(amt);

    document.getElementById('venue').innerHTML = cafe;
    document.getElementById('cost').innerHTML = '&#8358;' + amt;
});

iosOk.addEventListener("click", function () {
    let dbIntent = document.getElementById('right-ctrl');
        dbIntent.checked = true;

    successView.style.display = 'none';
    dashboardView.style.display = 'block';
})