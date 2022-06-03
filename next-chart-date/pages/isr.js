const ISR = ({ reactions }) => {
  return (
    <main>
      <div style={{ fontSize: "32px" }}>
        Reactions:
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/vercel/reactions/issues/1">
          Link
        </a>
      </div>

      <div className="line">
        <span className="emoji">👍</span> <strong>{reactions[0]}</strong>
      </div>
      <div className="line">
        <span className="emoji">👎</span> <strong>{reactions[1]}</strong>
      </div>
      <div className="line">
        <span className="emoji">😄</span> <strong>{reactions[2]}</strong>
      </div>
      <div className="line">
        <span className="emoji">🎉</span> <strong>{reactions[3]}</strong>
      </div>
      <div className="line">
        <span className="emoji">😕</span> <strong>{reactions[4]}</strong>
      </div>
      <div className="line">
        <span className="emoji">🧡</span> <strong>{reactions[5]}</strong>
      </div>
      <div className="line">
        <span className="emoji">🚀</span> <strong>{reactions[6]}</strong>
      </div>
      <div className="line">
        <span className="emoji">👀</span> <strong>{reactions[7]}</strong>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      //   Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      Authorization: `bearer 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`,
    },
    body: JSON.stringify({
      query: `query {
          repository(owner:"chibicode", name:"reactions") {
            issue(number:1) {
              reactionGroups {
                content
                users(first: 0) {
                  totalCount
                }
              }
            }
          }
        }`,
    }),
  });

  const json = await res.json();
  if (res.status !== 200) {
    console.error(json);
    throw new Error("Failed to fetch API");
  }

  // [0, 0, 0, 0, 0, 0, 0, 0]
  const reactions = json.data.repository.issue.reactionGroups.map(
    (item) => item.users.totalCount
  );

  return {
    props: {
      reactions,
    },
    revalidate: 1,
  };
}

export default ISR;
