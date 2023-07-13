import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER = new Player('vimeo-player');

PLAYER.on(
  'timeupdate',
  throttle(function (data) {
    // console.log(data);
    const currentTime = data.seconds;
    // console.log(currentTime);
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  PLAYER.setCurrentTime(savedTime);
}
