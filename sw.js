self.addEventListener('fetch', (event) => {
  // 설치 기능을 활성화하기 위한 최소한의 코드입니다.
  event.respondWith(fetch(event.request));
});