// Laad stylesheet (wordt in productie netjes in een los bestand gezet)
import './assets/style.scss'

import YouTubePlayer from "youtube-player";

let player = YouTubePlayer('player', {
    playerVars: {
        controls: 0,
        disablekb: 1,
        showinfo: 0,
        rel: 0,
        autohide: 1,
    },
});

player.loadVideoById('lA7n7TwPDmw');

