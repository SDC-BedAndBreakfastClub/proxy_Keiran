import http from 'k6/http';

export default function () {
  const randomRoom = Math.floor(Math.random() * 10000000 + 1);
  let response = http.get(`http://127.0.0.1:3000/rooms/${randomRoom}`);
};
