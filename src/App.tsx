import React from "react";
import "./App.css";
import { flatten, range } from "lodash";
import {
  COLS,
  firstXCols,
  itemDirections,
  items,
  puzzle,
  solve,
} from "./solver";

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

    return (
      <div className="SolutionView">
        {items.map((item, i) => {
          const { index, shapeRotation } = solution[i];
          const row = Math.floor(index / COLS);
          const col = index % COLS;
          const firstXCol = firstXCols[i][shapeRotation];
          const direction = itemDirections[i][shapeRotation];

          const hwDiff = item.length - item[0].length;
          const needDiff =
            direction === 1 ||
            direction === 3 ||
            direction === 4 ||
            direction === 6;
          return (
            <div
              key={i}
              className="SolutionViewItem"
              style={{
                top: row * 50,
                left: (col - firstXCol) * 50,
                width: item[0].length * 50,
                height: item.length * 50,
                transform: [
                  `translate3d(${needDiff ? hwDiff * 25 : 0}px, ${
                    needDiff ? hwDiff * -25 : 0
                  }px, 0px)`,
                  `rotate3d(1, 1, 0, ${Math.floor(direction / 4) * 180}deg)`,
                  `rotate3d(0, 0, 1, -${(direction % 4) * 90}deg)`,
                ].join(" "),
              }}
              data-direction={direction}
            >
              {flatten(
                item.map((s, r) =>
                  s.split("").map((_1, c) => (
                    <div
                      key={`${r}_${c}`}
                      className="SolutionViewCell"
                      style={
                        item[r][c] === "x"
                          ? {
                              border: "2px ridge",
                              borderColor: this.colors[i],
                              width: 46,
                              height: 46,
                              backgroundColor: this.colors[i],
                            }
                          : {}
                      }
                    />
                  ))
                )
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

type AppState = {
  month: number; // 0 - 11
  day: number; // 1 - 31
  dayName: number; // 0 - 6
  solutions: { index: number; shapeRotation: number }[][];
  index: number;
};

export default class App extends React.PureComponent<{}, AppState> {
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

  state: AppState = {
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
                {`Solution ${i + 1}`}
              </div>
            ))}
          </div>
        ) : (
          <div>No Solutions Found</div>
        )}
        <div>
          This page was created by{" "}
          <a href="https://github.com/Restingsound">Scott Mulderig</a>
        </div>
      </div>
    );
  }
}
