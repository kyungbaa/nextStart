import { useRouter } from 'next/router';

export default function ClientProjectspage() {
  const router = useRouter();
  console.log('query', router.query); // {id: 'macc'}
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}
