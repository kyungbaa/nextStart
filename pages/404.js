// 404 페이지의 파일명은 반드시 이렇게 404.js라고 해야한다. 그래야 404에러가 발생하였을 때 next.js가 이파일을 찾아올 수 있음
export default function notFoundPage() {
  return (
    <div>
      <h1>Page Not Found! 🤪</h1>
    </div>
  );
}
