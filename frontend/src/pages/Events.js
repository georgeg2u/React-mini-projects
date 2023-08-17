import {json, useLoaderData} from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  //   if(data.isError) {
  //       return <p>{data.message}</p>
  //     }
  const fetchedEvents = data.events;

  return <EventsList events={fetchedEvents} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'}
    throw json(
      {message: "Could not fetch events"},
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
