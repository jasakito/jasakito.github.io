document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('myMusic');
    if (audio.paused) {
       audio.play();
       this.textContent = '暂停';
      } else {
        audio.pause();
         this.textContent = '播放'; }
       });
