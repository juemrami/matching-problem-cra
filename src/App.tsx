import "./styles/index.css";
import React from "react";

export default function App() {
  const [students, setStudents] = React.useState(
    new Map([
      ["bob", []],
      ["jessica", []],
      ["mandork", []]
    ])
  );

  const [mentors, setMentors] = React.useState<Map<string, Array<string>>>(
    new Map([
      ["yara", []],
      ["meno", []]
    ])
  );

  return (
    <div className="App">
      <section id="selection">
        <div
          id="student-container"
          className="w-[10rem] border-2 border-pink-500"
        >
          <ul>
            <h3>Mentors</h3>
            {[...students.keys()].map((name) => {
              return <li>{name}</li>;
            })}
          </ul>
        </div>
        <div
          id="student-container"
          style={{
            width: "10rem",
            border: "1px solid black"
          }}
        >
          <ul>
            <h3>Students</h3>
            {[...mentors.keys()].map((name) => {
              return <li>{name}</li>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
