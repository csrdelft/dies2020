import './assets/style.scss'

import YouTubePlayer from "youtube-player";

YouTubePlayer('player', {playerVars: {controls: 0, disablekb: 1, showinfo: 0, rel: 0, autohide: 1,}})
    .loadVideoById('lA7n7TwPDmw');

