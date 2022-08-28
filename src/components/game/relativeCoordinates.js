function relativeCoords(event) {
  const bounds = event.target.getBoundingClientRect();
  const { offsetWidth, offsetHeight } = event.target;

  const xRelative = ((event.clientX - bounds.left) / offsetWidth) * 100;
  const yRelative = ((event.clientY - bounds.top) / offsetHeight) * 100;
  return { xRelative, yRelative };
}
export default relativeCoords;
