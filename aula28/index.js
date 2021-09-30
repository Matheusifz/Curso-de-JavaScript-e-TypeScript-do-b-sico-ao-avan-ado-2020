function leftZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function dataForm(data) {
  const day = leftZero(data.getDate());
  const month = leftZero(data.getMonth() + 1);
  const year = leftZero(data.getFullYear());
  const hour = leftZero(data.getHours());
  const min = leftZero(data.getMinutes());
  const sec = leftZero(data.getSeconds());
  return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

const data = new Date();
const brazilData = dataForm(data);
console.log(brazilData);
