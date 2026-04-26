import { useState, useEffect } from "react";
import Loading from "./components/loading";
import Tours from "./components/tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function removeTour(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }

  async function fetchTours() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function refreshTours() {
    setTimeout(() => {
      fetchTours();
    }, 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchTours();
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h4>{error}</h4>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours</h2>
          <div className='title-und'></div>
        </div>
        <p style={{ textAlign: "center" }}>
          <button
            type='button'
            style={{
              marginTop: "2rem",
              display: "inline",
            }}
            className='btn'
            onClick={refreshTours}
          >
            Refresh
          </button>
        </p>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
