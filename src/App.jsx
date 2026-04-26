import { useState, useEffect } from "react";
import Loading from "./components/loading";
import Tours from "./components/tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
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
    };

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

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};
export default App;
