import React from "react";
import "./App.css";
import { flatten, range } from "lodash";
import { COLS, firstXCols, itemMasks, puzzle, ROWS, solve } from "./solver";

class Calendar extends React.PureComponent<{
  month: number;
  day: number;
  dayName: number;
  onChange: (params: { month: number; day: number; dayName: number }) => any;
}> {
  monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  dayNames = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];

  render() {
    const { month, day, dayName, onChange } = this.props;
    return (
      <div className="Calendar">
        {range(0, 6).map((m) => (
          <div
            className={`item month ${month === m ? "selected" : ""}`}
            key={m}
            onClick={() => onChange({ month: m, day, dayName })}
          >
            {this.monthNames[m]}
          </div>
        ))}
        <div className="item empty" />
        {range(6, 12).map((m) => (
          <div
            className={`item month ${month === m ? "selected" : ""}`}
            key={m}
            onClick={() => onChange({ month: m, day, dayName })}
          >
            {this.monthNames[m]}
          </div>
        ))}
        <div className="item empty" />
        {range(1, 32).map((d) => (
          <div
            className={`item ${day === d ? "selected" : ""}`}
            key={d}
            onClick={() => onChange({ month, day: d, dayName })}
          >
            {d}
          </div>
        ))}
        {range(0, 4).map((dn) => (
          <div
            className={`item day ${dayName === dn ? "selected" : ""}`}
            key={dn}
            onClick={() => onChange({ month, day, dayName: dn })}
          >
            {this.dayNames[dn]}
          </div>
        ))}
        <div className="item empty" />
        <div className="item empty" />
        <div className="item empty" />
        <div className="item empty" />
        {range(4, 7).map((dn) => (
          <div
            className={`item day ${dayName === dn ? "selected" : ""}`}
            key={dn}
            onClick={() => onChange({ month, day, dayName: dn })}
          >
            {this.dayNames[dn]}
          </div>
        ))}
      </div>
    );
  }
}

class SolutionView extends React.PureComponent<{
  solution: { index: number; shapeRotation: number }[];
}> {
  colors = [
    "#6B7280",
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#3bd7f6",
    "#6366F1",
    "#c85cf6",
    "#EC4899",
    "#ff266e",
    "#964b2d",
  ];

  render() {
    const { solution } = this.props;
    const board = range(ROWS).map(() => range(COLS).map(() => -1));

    itemMasks.forEach((masks, shape) => {
      const { index, shapeRotation } = solution[shape];
      const row = Math.floor(index / COLS);
      const col = index % COLS;
      const mask = masks[shapeRotation];
      const n = mask.length;
      const m = mask[0].length;
      const firstXCol = firstXCols[shape][shapeRotation];

      for (let r = 0; r < n; ++r) {
        for (let c = 0; c < m; ++c) {
          if (mask[r][c] === "x") {
            board[row + r][col + c - firstXCol] = shape;
          }
        }
      }
    });

    return (
      <div className="SolutionView">
        {flatten(
          range(ROWS).map((row) =>
            range(COLS).map((col) => (
              <div
                key={`${row}_${col}`}
                className="item"
                style={
                  board[row][col] >= 0
                    ? { backgroundColor: this.colors[board[row][col]] }
                    : { backgroundColor: "transparent" }
                }
              />
            ))
          )
        )}
      </div>
    );
  }
}

export default class App extends React.PureComponent<{}> {
  solve = (month: number, day: number, dayName: number) => {
    const board = puzzle.map((row) => row.split(""));
    board[Math.floor(month / 6)][month % 6] = "x";
    board[Math.floor((day - 1) / 7) + 2][(day - 1) % 7] = "x";
    if (dayName < 4) {
      board[6][3 + dayName] = "x";
    }
    board[7][dayName] = "x";
    return solve(board);
  };

  state = {
    month: new Date().getMonth(), // 0 - 11
    day: new Date().getDate(), // 1 - 31
    dayName: new Date().getDay(), // 0 - 6
    solutions: this.solve(
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getDay()
    ),
    index: 0,
  };

  handleChange = ({
    month,
    day,
    dayName,
  }: {
    month: number;
    day: number;
    dayName: number;
  }) =>
    this.setState({
      month,
      day,
      dayName,
      solutions: this.solve(month, day, dayName),
      index: 0,
    });

  render() {
    const { month, day, dayName, solutions, index } = this.state;
    return (
      <div className="App">
        <h1>Calendar Puzzle Solver with Day of Week</h1>
        <div>
          <a href="https://filmmings.com/products/daily-calendar-puzzle">
            Daily Calendar Puzzle with Day of Week
          </a>
          <a
            href="https://github.com/Restingsound/calendar-puzzle-solver"
            style={{ marginLeft: 16 }}
          >
            Github - Restingsound
          </a>
        </div>
        <div className="Container">
          <Calendar
            month={month}
            day={day}
            dayName={dayName}
            onChange={this.handleChange}
          />
          {solutions[index] && <SolutionView solution={solutions[index]} />}
        </div>
        {solutions.length > 0 ? (
          <div className="Solutions">
            {solutions?.map((solution, i) => (
              <div
                className={`SolutionItem ${i === index ? "selected" : ""}`}
                key={i}
                onClick={() => this.setState({ index: i })}
              >
                {`Solution ${i}`}
              </div>
            ))}
          </div>
        ) : (
          <div>No Solution ？？</div>
        )}
      </div>
    );
  }
}
