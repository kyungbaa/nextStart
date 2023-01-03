import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <h1>The Home Page</h1>
        <ul>
          <li>
            <a href="/portfolio">Portfolio</a>
            {/* 기존 a태그 사용시 표준 링크가 주는 문제점은 새페이지를 불러오기 위해 새 http요청을 했을때, 
            react앱을 실행할 때 갖는 앱 상태 (state)가 바뀌는 상황이 생김 react context redux
            next만 해당되는거 아님 리액트 사용에 적합하지 않음
            */}
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link replace href="/portfolio">
              Portfolio
            </Link>
            {/* replace -> push대신 replace하는 속성 뒤로가기 history에 쌓이지 않고 대체된다 */}
          </li>
          <li>
            <Link href="/client">Clients</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
