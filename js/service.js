function serFetch() {
    var nm = document.getElementById('nm');
    var ph = document.getElementById('ph');
    var cm = document.getElementById('cm');
    var sr = document.getElementById('sr');
    var pic = document.getElementById('pic');

    nm.innerHTML += localStorage.getItem(data.name);
}

serFetch();