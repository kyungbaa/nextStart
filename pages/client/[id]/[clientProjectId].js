import { useRouter } from 'next/router';

export default function SelectedClientProjectProject() {
  const router = useRouter();
  console.log('query', router.query); // {id: 'max', clientProjectId: 'project1'}
  return (
    <div>
      <h1>The Project Page for Spectific for a Selected Client</h1>
    </div>
  );
}
