import { API_URL } from "../constants";

const SSG = ({ users }) => {
  return (
    <main>
      <h1>Static Site Generation</h1>
      <pre>{JSON.stringify(users, null, 4)}</pre>
    </main>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(API_URL);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default SSG;
