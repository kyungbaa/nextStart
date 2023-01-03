import Link from 'next/link';
export default function ClientsPage() {
  const client = [
    {
      id: 'max',
      name: 'Maximilian',
    },
    {
      id: 'manu',
      name: 'Manuel',
    },
    {
      id: 'hoo',
      name: 'Hookyung',
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {client.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* Link또한 URL 개체를 수신할 수 있으며 자동으로 형식을 지정하여 URL 문자열을 만듭니다. 방법은 다음과 같습니다. */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
