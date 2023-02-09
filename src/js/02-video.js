import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_CODE = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const setCurTimeToLocStorage = e => localStorage.setItem(TIME_CODE, e.seconds);
player.on('timeupdate', throttle(setCurTimeToLocStorage, 1000));

const currentTime = localStorage.getItem(TIME_CODE);
player.setCurrentTime(currentTime);

