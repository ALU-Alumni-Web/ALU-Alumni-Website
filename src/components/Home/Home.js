import "./Home.scss";
import UpcomingEvents from '../../components/Events/UpcomingEvents'
import { eventData } from "../Events/EventData";
const Home = (props) => {
  // const [events, setEvents] = useState(null);
  // const [news, setNews] = useState(null);
  // const [isPending, setIsPending] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/news")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("Could not fetch :(");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setNews(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/events")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("Could not fetch :(");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setEvents(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     });
  // }, []);

  return (
    <section>
      <UpcomingEvents events={eventData} />
    </section>
  );
};

export default Home;
