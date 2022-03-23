import { useRouter } from 'next/router';

function ClientProjectsPage() {

  const router = useRouter();

  console.log(router.query)

  function loadClientProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {id: 'max', clientprojectid: 'projecta'}
    })
  }

  return (
    <div>
      <h1>The projects of a Given Client</h1>
      <button onClick={loadClientProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
