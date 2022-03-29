import React from 'react';
import previous from '../../assets/add.png'; //prev pic
import next from '../../assets/add.png'; //next pic
import { useState } from 'react';

export const UpcomingEvents = ({ events }) => {
    const [current, setCurrent] = useState(0);
    const length = events.length;

    const previous_event = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const next_event = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(events) || events.length <= 0) {
        return null;
    }
    return (
        <div className='upcoming-events'>
            <h1>Upcoming Events</h1>
            <div className="events">
                {events.map((event, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            {index === current && (
                                <div className='event'>
                                    <div className='previous-event'>
                                        <img src={previous} alt="previous" onClick={previous_event} />
                                    </div>
                                    <div className='event-text'>
                                        <h3>{event.title}</h3>
                                        <h4>{event.subtitle}</h4>
                                        <p>{event.description}</p>
                                        <button>Register</button>
                                    </div>
                                    <div className='event-image'>
                                        <img src={event.image} />
                                    </div>
                                    <div className='next-event'>
                                        <img src={next} alt="next" onClick={next_event} />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default UpcomingEvents;
