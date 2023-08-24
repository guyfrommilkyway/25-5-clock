const cleanTime = (time) => (time.toString().length === 1 ? '0' + time : time);

const getNowTime = () => new Date().getTime();

const getEndTime = (length) => {
  return getNowTime() + length * 60 * 1000;
};

const getTimeLeft = (endTime) => {
  const now = new Date().getTime();
  const diff = endTime - now;
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor(diff / 1000) % 60;

  // data
  const timeLeft = {
    minutes: cleanTime(minutes),
    seconds: cleanTime(seconds),
  };

  return timeLeft;
};

const getDiffTime = (time) => time - getNowTime();

export { cleanTime, getNowTime, getEndTime, getTimeLeft, getDiffTime };
