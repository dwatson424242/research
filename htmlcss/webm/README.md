# Webm

A Webm file is a file that is embedded in html5 that will stream on the background of a page.

Example: 
https://www.periscope.tv/

<video autoplay="" loop="" poster="/v/images/splash_bg.jpg" id="bgvid">
    <source src="/v/images/splash_bg.webm" type="video/webm">
    <source src="/v/images/splash_bg.mp4" type="video/mp4">
</video>

CSS:

video#bgvid {
    position: fixed;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background: url("../images/splash_bg.jpg") no-repeat;
    background-size: cover;
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}

video {
    object-fit: contain;
}


Free Software 
http://easyhtml5video.com/easyhtml5video-free-setup.zip


