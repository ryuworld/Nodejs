import React from "react";

export default function BoardList({ thead, content }) {
  return (
    <table>
      <thead>
        <tr>
          {thead.map((i, idx) => {
            return <th key={idx}>{i}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {thead.map((i, idx) => {
          return (
            <tr key={idx}>
              <td>{i}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
