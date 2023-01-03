// react와 다르게 next.js는 만들어야 할 컴포넌트 파일을 생성해서 라우팅을 하므로 (파일기반 라우팅) react처럼 따로 route를 위한 코드를 작성할 필요 없음

// index페이지는 언제나 해당 폴더의 가장 기본 페이지이며 전체 루트 페이지에 적용되므로 index.js파일이 pages 폴더나 /portfolio/인 경로에 대해 index.js파일을 불러온다

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
            <Link href="/clients">Clients</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
