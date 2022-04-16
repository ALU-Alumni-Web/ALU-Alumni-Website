import React, { useState } from "react";
import { eventData } from "./EventData";
import classes from "./UpcomingEvents.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const UpcomingEvents = ({ events }) => {
  const [event, setEvent] = useState(0);
  const eventLen = events.length;

  const nextEvent = () => {
    setEvent(event === eventLen - 1 ? 0 : eventLen + 1);
  };

  const prevEvent = () => {
    setEvent(event === 0 ? eventLen - 1 : eventLen - 1);
  };

  console.log(nextEvent);

  return (
    <div className={classes.event_container}>
      <h1>Upcoming Events</h1>
      <h2>Good read Thursday</h2>
      <FaArrowAltCircleRight
        className={classes.right_arrow}
        onClick={nextEvent}
      />
      <FaArrowAltCircleLeft
        className={classes.left_arrow}
        onClick={prevEvent}
      />
      {eventData.map((events, index) => {
        return (
          <section
            className={index === event ? "slide active" : "slide"}
            key={index}
          >
            {index === event && (
              <div className={classes.event_cover}>
                <h2>{events.title}</h2>
                <p>{events.description}</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default UpcomingEvents;
