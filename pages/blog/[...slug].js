// [...slug].js 파일명 ... 스프레드 연산자를 사용해서 여러가지 세그먼트 활용가능 ...는 필수적으로 들어가야함
import { useRouter } from 'next/router';
export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  // http://localhost:3000/blog/2020/12로 주소창 입력시
  //   {
  //     "slug": [
  //         "2020",
  //         "12"
  //     ]
  // }
  // 각 세그먼트의 문자열을 배열로 나타냄 url안에서 슬래시에서 구별함
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
