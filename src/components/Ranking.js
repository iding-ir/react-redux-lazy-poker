import React from "react";

import "./Ranking.css";

const Ranking = (props) => {
  const { players } = props;

  return (
    <table className="ranking-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        {Object.values(players)
          .sort((a, b) => {
            return b.points - a.points;
          })
          .slice(0, 3)
          .map((player) => {
            const { id, name, points } = player;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{points}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Ranking;
