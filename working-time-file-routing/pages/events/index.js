import { Fragment } from 'react/cjs/react.production.min';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {

  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return(
    <Fragment>
      <EventsSearch onShearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
