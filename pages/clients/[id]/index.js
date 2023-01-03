import { useRouter } from 'next/router';

export default function ClientProjectspage() {
  const router = useRouter();
  console.log('query', router.query); // {id: 'macc'}
  const loadProjectHendler = () => {
    // load data...
    // router.push('/clients/max/projecta');
    //   router.replace('/clients/max/projecta'); 뒤로 돌아가지 못하게 현재 페이지 대체
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: 'max', clientProjectId: 'projecta' },
    });
  };
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHendler}>Load Project A</button>
    </div>
  );
}
