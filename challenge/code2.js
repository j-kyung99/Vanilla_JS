const size = [800, 1200];

function handleResize() {
  const nowSize = window.innerWidth;
  if (nowSize <= size[0]) {
    document.body.style.backgroundColor = "skyblue";
  } else if (nowSize > size[0] && nowSize <= size[1]) {
    document.body.style.backgroundColor = "darkorchid";
  } else document.body.style.backgroundColor = "sandybrown";
}

window.addEventListener("resize", handleResize);
