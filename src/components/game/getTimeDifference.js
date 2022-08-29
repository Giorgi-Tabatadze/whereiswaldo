function getTimeDifference(startTime) {
  const timeNow = Date.now();
  const difference = timeNow - startTime;

  return difference;
}

export default getTimeDifference;
