document.addEventListener('DOMContentLoaded', function () {
  var videoFileInput = document.getElementById('video-file');
  var videoPlayer = document.getElementById('video-player');
  var loadingOverlay = document.getElementById('loading-overlay');

  videoFileInput.addEventListener('change', function () {
    var file = videoFileInput.files[0];
    if (file && file.type.includes('video/')) {
      var fileURL = URL.createObjectURL(file);
      videoPlayer.src = fileURL;
      videoPlayer.load();

      videoPlayer.style.display = 'none';
      loadingOverlay.style.display = 'block';

      setTimeout(function () {
        loadingOverlay.style.display = 'none';
        videoPlayer.style.display = 'block';
      }, 2000);
    } else {
      videoPlayer.src = '';
      loadingOverlay.style.display = 'none';
      alert('Por favor, selecciona un archivo de video válido.');
    }
  });
});
