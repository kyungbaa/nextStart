import next from 'next';

// 동적 라우팅을 만들기 위해서는 [원하는 동적 라우팅을 위한 이름].js
// 대괄호를 붙여야 next.js에 주소를 portfolio/projectId로 설정하지 않고 projectId를 플레이스홀더로 인식하고 컴포넌트에 액세스한다.

import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname); // /portfolio/[projectId] next Js에 의해 추론된 값
  console.log(router.query); // {projectId: 'sdfsf'} (내가 주소창에 입력한 값)
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
