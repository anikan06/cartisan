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

document.getElementById('subOnrDet').addEventListener('click', subOwnDet);

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
    localStorage.clear();
    var array = JSON.parse(localStorage.getItem('Data') || '[]');
    var ty = array.push(data);
    localStorage.setItem('Data', JSON.stringify(array));
}

/*Function Validation*/

/*SUBMIT AND CONFIRM*/
function subOwnDet() {
    store();

    $('#confirmmodal').modal('show');
}

function cntnu() {
    window.location.href = '../index.html';
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
