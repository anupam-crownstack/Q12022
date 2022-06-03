import { useRouter } from "next/router";
const usersId = ["1", "2", "3", "4", "5"];
const userAPI = "https://jsonplaceholder.typicode.com/users/";

const SSRUserComponent = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  return (
    <main>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
    </main>
  );
};

export async function getStaticPaths() {
  const paths = usersId.map((item) => ({ params: { id: item } }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  try {
    // const res = await fetch("ashdbahd" + API_URL);
    const res = await fetch(userAPI + `${context.params.id}`);
    const user = await res.json();
    // Pass data to the page via props
    return { props: { user } };
  } catch (error) {
    return { props: { errorCode: 401, errorMessage: "Failed to fetch data" } };
  }
}

export default SSRUserComponent;
