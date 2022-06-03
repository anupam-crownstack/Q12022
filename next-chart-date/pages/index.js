import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const usersId = ["1", "2", "3", "4", "5"];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next + Date + Chart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <details>
        <summary>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>Next.js</span>
        </summary>
        <br></br>
        <h4>Data Fetching</h4>
        <div>
          <Link href="/csr">CSR - Client Side Rendering</Link>
        </div>{" "}
        <div>
          <Link href="/ssr">SSR - Server Side Rendering</Link>
        </div>{" "}
        <div>
          <Link href="/ssg">SSG - Static Side Generation</Link>
        </div>{" "}
        <div>
          <Link href="/isr">ISR - Incremental Static Regeneration</Link>
        </div>
        <hr></hr>
        <h4>Dynamic Path + Server Side Rendering</h4>
        {usersId.map((item) => (
          <div className={styles.cursor} key={item}>
            <Link href={`user/${item}`}>
              <span>User - {item}</span>
            </Link>
          </div>
        ))}
      </details>
      <br></br>
      <details>
        <summary>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>Nivo Graphs</span>
        </summary>
        <br></br>
        <div>
          <Link href="/nivobar">Nivobar</Link>
        </div>
        <div>
          <Link href="/nivopie">Nivopie (donut)</Link>
        </div>
        <div>
          <Link href="/nivobump">Nivobump</Link>
        </div>
      </details>
      <br></br>
      <details>
        <summary>
          <span style={{ fontSize: "18px", fontWeight: 700 }}>
            React Chartjs
          </span>
        </summary>
        <br></br>
        <div>
          <Link href="/chartjs-radar">Radar</Link>
        </div>
        <div>
          <Link href="/chartjs-line">Line</Link>
        </div>
      </details>
    </div>
  );
}
