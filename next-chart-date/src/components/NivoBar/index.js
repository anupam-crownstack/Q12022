import dynamic from "next/dynamic";

const MyResponsiveBar = dynamic(() => import("./Bar"), {
  ssr: false,
});

import { useState } from "react";
// import MyResponsiveBar from "./Bar";
const barData = [
  {
    country: "AD",
    "hot dog": 129,
    "hot dogColor": "hsl(14, 70%, 50%)",
    burger: 180,
    burgerColor: "hsl(338, 70%, 50%)",
    sandwich: 186,
    sandwichColor: "hsl(167, 70%, 50%)",
    kebab: 130,
    kebabColor: "hsl(14, 70%, 50%)",
    fries: 18,
    friesColor: "hsl(282, 70%, 50%)",
    donut: 88,
    donutColor: "hsl(280, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 67,
    "hot dogColor": "hsl(234, 70%, 50%)",
    burger: 188,
    burgerColor: "hsl(314, 70%, 50%)",
    sandwich: 137,
    sandwichColor: "hsl(62, 70%, 50%)",
    kebab: 55,
    kebabColor: "hsl(80, 70%, 50%)",
    fries: 65,
    friesColor: "hsl(116, 70%, 50%)",
    donut: 162,
    donutColor: "hsl(329, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 29,
    "hot dogColor": "hsl(99, 70%, 50%)",
    burger: 184,
    burgerColor: "hsl(27, 70%, 50%)",
    sandwich: 163,
    sandwichColor: "hsl(298, 70%, 50%)",
    kebab: 39,
    kebabColor: "hsl(150, 70%, 50%)",
    fries: 109,
    friesColor: "hsl(103, 70%, 50%)",
    donut: 190,
    donutColor: "hsl(171, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 4,
    "hot dogColor": "hsl(273, 70%, 50%)",
    burger: 170,
    burgerColor: "hsl(239, 70%, 50%)",
    sandwich: 45,
    sandwichColor: "hsl(155, 70%, 50%)",
    kebab: 125,
    kebabColor: "hsl(154, 70%, 50%)",
    fries: 37,
    friesColor: "hsl(77, 70%, 50%)",
    donut: 82,
    donutColor: "hsl(126, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 46,
    "hot dogColor": "hsl(24, 70%, 50%)",
    burger: 186,
    burgerColor: "hsl(312, 70%, 50%)",
    sandwich: 16,
    sandwichColor: "hsl(94, 70%, 50%)",
    kebab: 110,
    kebabColor: "hsl(297, 70%, 50%)",
    fries: 54,
    friesColor: "hsl(315, 70%, 50%)",
    donut: 121,
    donutColor: "hsl(150, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 75,
    "hot dogColor": "hsl(92, 70%, 50%)",
    burger: 189,
    burgerColor: "hsl(292, 70%, 50%)",
    sandwich: 82,
    sandwichColor: "hsl(275, 70%, 50%)",
    kebab: 47,
    kebabColor: "hsl(225, 70%, 50%)",
    fries: 55,
    friesColor: "hsl(43, 70%, 50%)",
    donut: 3,
    donutColor: "hsl(208, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 130,
    "hot dogColor": "hsl(313, 70%, 50%)",
    burger: 130,
    burgerColor: "hsl(51, 70%, 50%)",
    sandwich: 36,
    sandwichColor: "hsl(105, 70%, 50%)",
    kebab: 171,
    kebabColor: "hsl(332, 70%, 50%)",
    fries: 136,
    friesColor: "hsl(123, 70%, 50%)",
    donut: 134,
    donutColor: "hsl(316, 70%, 50%)",
  },
];

const NivoBar = () => {
  const [layout, setLayout] = useState("vertical");

  return (
    <main>
      <h3>NivoBar</h3>
      <select value={layout} onChange={(e) => setLayout(e.target.value)}>
        <option value="vertical">Vertical</option>
        <option value="horizontal">Horizontal</option>
      </select>
      <div style={{ height: "600px", width: "70%" }}>
        <MyResponsiveBar data={barData} layout={layout} />
      </div>
    </main>
  );
};

export default NivoBar;
