import UpcomingEvents from "../../components/Events/UpcomingEvents";
import GetInvolved from "../GetInvolved/getInvolved";
import NewList from "../../components/News/NewsList";
import './Home.scss';
import { useState, useEffect } from 'react';

export function Home(props) {
    const [events, setEvents] = useState(null);
    const [news, setNews] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/news")
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch :(")
                }
                return res.json()
            })
            .then(data => {
                setNews(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:8000/events")
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch :(")
                }
                return res.json()
            })
            .then(data => {
                setEvents(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [])
    return (
        <div className="home-container">
            <section className="news_section">{news && <NewList news={news} />}</section>
            <section className="events_section"> {events && <UpcomingEvents events={events} />} </section>
            <section className="get-involved-section"> <GetInvolved /> </section>
        </div>
    )
}

export default Home;