import React, { useEffect, useState } from "react";

export default function apexchart() {
  const [Apexchart, setApexchart]: any = useState();

  useEffect(() => {
    import("react-apexcharts").then((d) => setApexchart(() => d.default));
  }, []);

  return !Apexchart ? (
    <></>
  ) : (
    <Apexchart
      options={{
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      }}
      series={[
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ]}
      height={700}
      width={1000}
      type="bar"
    />
  );
}
