import axios from "axios";
import { Suspense } from "react";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

async function RandomJoke() {
  const randomJokeObject = await fetchData();
  return <p>{randomJokeObject.setup}</p>;
}

export default function Page() {
  return (
    <div>
      <h1>Random Joke</h1>
      <Suspense fallback={<p>Loading..</p>}>
        <RandomJoke />
      </Suspense>
    </div>
  );
}
