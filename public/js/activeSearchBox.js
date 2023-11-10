function activeSearchBox() {
  const headerMaskElement = "#header-mask";
  const activeHeaderMaskElement = "header-mask-active";
  const deactiveHeaderMaskElement = "header-mask-deactive";

  const headerMask = document.querySelector(headerMaskElement);

  if (headerMask.classList.contains(deactiveHeaderMaskElement)) {
    headerMask.classList.remove(deactiveHeaderMaskElement);
    headerMask.classList.add(activeHeaderMaskElement);
  } else {
    headerMask.classList.remove(activeHeaderMaskElement);
    headerMask.classList.add(deactiveHeaderMaskElement);
  }
}
