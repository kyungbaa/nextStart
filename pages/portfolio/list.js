import React from 'react';

export default function list() {
  return (
    <div>
      {/* 중첩 라우팅 설정하기 위해서는 폴더 내부에서 기본 index.js파일 외에 따로 만들면 된다.
        -> http://localhost:3000/portfolio/list */}
      <h1>The List Page</h1>
    </div>
  );
}
