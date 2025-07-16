const btn = document.getElementById('btn');
const info = document.querySelector('.info');
const card = document.querySelector('.card');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    fetch(`https://ipinfo.io/json?token=ef1119f2d64661`)
        .then(res => res.json())
        .then(data => {
            let location = data.loc.split(',');


            body.innerHTML = `
        <div class="card">
        <h1>Foydalanuvchi joylashuvini aniqlash</h1>
        <button id="btn">Joylashuvni korsatish</button>
        <div class="info">
            <h2>Kenglik:${location[0]}</h2>
            <h2>Uzunlik:${location[1]}</h2>
            <h2>Mamlakat:${data.country}</h2>
            <h2>Shahar:${data.city}</h2>
            <h2>IP Manzil:${data.ip}</h2>
            <h2>Internet Provayder:${data.org}</h2>
        </div>
        <iframe src="https://www.google.com/maps?q=${location[0]},${location[1]}&z=15&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `
        })
}

)
