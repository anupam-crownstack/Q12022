import Error from "next/error";
import { API_URL } from "../constants";

const SSR = ({ errorCode, errorMessage, data }) => {
  if (errorCode) return <Error statusCode={errorCode} title={errorMessage} />;

  return (
    <main>
      <h1>Server Side Rendering</h1>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </main>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    // const res = await fetch("ashdbahd" + API_URL);
    const res = await fetch(API_URL);
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data } };
  } catch (error) {
    return { props: { errorCode: 401, errorMessage: "Failed to fetch data" } };
  }
}

export default SSR;
