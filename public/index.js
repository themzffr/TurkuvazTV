function playVideo(vd) {
    let videom = vd.children[0].children[1].children[0].children[0];
    videom.play();
}

function stopVideo(vd) {
    let videom = vd.children[0].children[1].children[0].children[0];
    videom.pause();
}