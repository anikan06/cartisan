function carOwn() {
    window.location.href = '../view/carowner.html';
}

function serMod() {
    window.location.href = '../view/serviceModal.html';
}

document.getElementById('drOwnr').addEventListener('click', carOwn);
document.getElementById('serMod').addEventListener('click', serMod);

/*
function readURL(input) {
    console.log("test");

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#fileUp").change(function() {
    readURL(this);
});*/
