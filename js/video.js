(() => {
  // <stdin>
  function handleVideo() {
    let sources = [
      '<source src="../../../video/business-video/animation-artificial-intelligence-ai-technology.mp4" id="random_video_source">',
      '<source src="../../../video/business-video/artificial-intelligence-brain-animation.mp4" id="random_video_source">',
      '<source src="../../../video/business-video/cloud-data-transfer-cloud-computing-technology.mp4" id="random_video_source">',
      '<source src="../../../video/business-video/code.mp4" id="random_video_source">',
      '<source src="../../../video/business-video/mobile-app-development-blueprint-concept.mp4" id="random_video_source">',
      '<source src="../../../video/business-video/scene.mp4" id="random_video_source">'
    ];
    let source = sources[Math.floor(Math.random() * sources.length)];
    if (document.getElementById("random_video")) {
      const target_video = document.getElementById("random_video");
      target_video.innerHTML = source;
    }
  }
  if (document.getElementById("random_video")) {
    handleVideo();
  }
})();
