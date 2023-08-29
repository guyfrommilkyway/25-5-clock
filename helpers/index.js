const getNowTime = () => new Date().getTime();

const getEndTime = (len) => getNowTime() + len;

const getDiffTime = (time) => time - getNowTime();

const getTimeLeft = (endTime) => {
  const now = new Date().getTime();
  const diff = endTime - now;
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.ceil(diff / 1000) % 60;
  const formattedMinutes =
    minutes < 0 ? '00' : minutes.toString().padStart(2, '0');
  const formattedSeconds =
    seconds < 0 ? '00' : seconds.toString().padStart(2, '0');

  return formattedMinutes + ':' + formattedSeconds;
};

export { getNowTime, getEndTime, getTimeLeft, getDiffTime };
