import React from "react";

const NSEGraph = ({ NSEIndex }) => {
  return (
    <section className="NSEGraph">
      <div className="container py-3">
        <div className="section_title">
          <h2>Today's Market</h2>
        </div>

        <table className="mb-3">
          <thead>
            <tr>
              <th>Company</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>LTP</th>
              <th>Change %</th>
              <th>Volume</th>
            </tr>
          </thead>

          <tbody>
            {NSEIndex.map((nse, i) => {
              return (
                <tr key={i}>
                  <td>{nse.symbol}</td>
                  <td>{nse.open}</td>
                  <td>{nse.dayHigh}</td>
                  <td>{nse.dayLow}</td>
                  <td>{nse.lastPrice}</td>
                  <td>{nse.pChange}</td>
                  <td>{nse.totalTradedVolume}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NSEGraph;
