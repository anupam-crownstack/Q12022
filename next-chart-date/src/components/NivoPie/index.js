import MyResponsivePie from "./Pie";

const pieData = [
  {
    id: "go",
    label: "go",
    value: 254,
    color: "hsl(248, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 233,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 319,
    color: "hsl(260, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 42,
    color: "hsl(10, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 395,
    color: "hsl(286, 70%, 50%)",
  },
];

const NivoPie = () => {
  return (
    <main>
      <h3>NivoPie/Donut</h3>
      <div style={{ height: "600px", width: "70%" }}>
        <MyResponsivePie data={pieData} />
      </div>
    </main>
  );
};

export default NivoPie;
