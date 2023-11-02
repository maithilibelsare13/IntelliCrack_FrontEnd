const dropArea = document.getElementById('image-drop');
const inputImage = document.getElementById('input-image');
const imageView = document.getElementById('image-view');

inputImage.addEventListener("change", uploadImage)

function uploadImage(){
  let imageURL = URL.createObjectURL(inputImage.files[0]);
  imageView.style.backgroundImage = `url(${imageURL})`;
  imageView.textContent = "";
  imageView.style.border = 'none';

  // document.querySelector('.area').classList.add('left');
  // document.querySelector('#image-drop').classList.add('left');

  setTimeout(function () {
    window.location.href = '../ResultPage/resultPage.html';
}, 2000);

}

dropArea.addEventListener('dragover',function(e){
  e.preventDefault();
})

dropArea.addEventListener('drop',function(e){
  e.preventDefault();
  inputImage.files = e.dataTransfer.files;
  uploadImage();
})