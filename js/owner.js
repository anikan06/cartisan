var data = {};

$(function () {
    // Multiple images preview in browser
    console.log("test");
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                };

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function () {
        imagesPreview(this, 'div.gallery');
    });
});

// document.getElementById('subOnrDet').addEventListener('click', store);

function store() {
    console.log("test565");
    var inputname = document.getElementById("name").value;
    var inputphone = document.getElementById("phone").value;
    var incarModel = document.getElementById("carModel").value;
    var inputserReq = document.getElementById("serReq").value;
    var inputglary = document.getElementById("glary").value;
    data = {
        name: inputname,
        phone: inputphone,
        model: incarModel,
        req: inputserReq,
        img: inputglary
    };
    console.log("thi is 1" + data);
    localStorage.clear();
    var array = JSON.parse(localStorage.getItem('Data') || '[]');
    var ty = array.push(data);
    localStorage.setItem('Data', JSON.stringify(array));
}


// function serFetch() {
//     var nm = document.getElementById('nm');
//     var ph = document.getElementById('ph');
//     var cm = document.getElementById('cm');
//     var sr = document.getElementById('sr');
//     var pic = document.getElementById('pic');
//     // nm.innerText += localStorage.getItem(data.name);
//     var tr = localStorage.getItem('data');
// }

