import Link from 'next/link';

function ClientsPage() {

  const clients = [
    { id: "pac", name: "Proyectos Agroindustriales" },
    {id: "nativeco", name: "Native Colombia"}
  ];

  console.log("here")

  return (
    <div>
      <h1>The client Page</h1>
      <ul>
        {
          /* Basic usage for link ref
          clients.map((client) =>(
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))*/

          /* Other way for use Link references */
          clients.map((client) =>(
            <li key={client.id}>
              <Link href={{
                pathname: 'clients/[id]',
                query: {id: client.id}
              }}>{client.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ClientsPage;
