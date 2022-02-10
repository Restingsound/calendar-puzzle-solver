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
import { testSolver } from "./testSolver";

class Calendar extends React.PureComponent<{
  month: number;
  day: number;
  dayName: number;
  onChange: (params: { month: number; day: number; dayName: number }) => any;
}> {
  monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  render() {
    const { month, day, dayName, onChange } = this.props;
    return (
      <div>
        <div className="SolutionViewCell"></div>
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
      </div>
    );
  }
}

class CalendarBackground extends React.PureComponent<{}> {
  render() {
    return (
      <div className="CalendarBackground">
        <img
          src="https://restingsound.github.io/calendar-puzzle-solver/images/calendarBackground.png"
          alt="Calendar Background"
        />
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
                  s.split("").map((_1, c) => {
                    if (item[r][c] !== "x") {
                      return (
                        <div key={`${r}_${c}`} className="SolutionViewCell" />
                      );
                    }
                    let top = 0;
                    let bottom = 0;
                    let left = 0;
                    let right = 0;
                    const bw = 1; //border width
                    if (r === 0) {
                      top = 1;
                    } else {
                      if (item[r - 1][c] === ".") {
                        top = 1;
                      }
                    }
                    if (r === item.length - 1) {
                      bottom = 1;
                    } else {
                      if (item[r + 1][c] === ".") {
                        bottom = 1;
                      }
                    }
                    if (c === 0) {
                      left = 1;
                    } else {
                      if (item[r][c - 1] === ".") {
                        left = 1;
                      }
                    }
                    if (c === item[0].length - 1) {
                      right = 1;
                    } else {
                      if (item[r][c + 1] === ".") {
                        right = 1;
                      }
                    }
                    return (
                      <div
                        key={`${r}_${c}`}
                        className="SolutionViewCell"
                        style={{
                          borderTop: bw * top,
                          borderLeft: bw * left,
                          borderRight: bw * right,
                          borderBottom: bw * bottom,
                          borderStyle: "solid",
                          borderColor: "black",
                          width: 50 - left * bw - right * bw,
                          height: 50 - top * bw - bottom * bw,
                          backgroundColor: this.colors[i],
                        }}
                      />
                    );
                  })
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
  solutionCount: number;
};

export default class App extends React.PureComponent<{}, AppState> {
  solve = (
    month: number,
    day: number,
    dayName: number,
    solutionCount: number
  ) => {
    const board = puzzle.map((row) => row.split(""));
    board[Math.floor(month / 6)][month % 6] = "x";
    board[Math.floor((day - 1) / 7) + 2][(day - 1) % 7] = "x";
    if (dayName < 4) {
      board[6][3 + dayName] = "x";
    }
    board[7][dayName] = "x";
    return solve(board, solutionCount);
  };

  state: AppState = {
    month: new Date().getMonth(), // 0 - 11
    day: new Date().getDate(), // 1 - 31
    dayName: new Date().getDay(), // 0 - 6
    solutions: this.solve(
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getDay(),
      1
    ),
    index: 0,
    solutionCount: 1,
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
      solutions: this.solve(month, day, dayName, this.state.solutionCount),
      index: 0,
    });

  solCountChange = (solutionCount: number) =>
    this.setState({
      solutionCount: solutionCount,
      solutions: this.solve(
        this.state.month,
        this.state.day,
        this.state.dayName,
        solutionCount
      ),
    });

  longMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  longDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  nth = function (d: number): String {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  render() {
    if (false) {
      testSolver();
    }
    const { month, day, dayName, solutions, index, solutionCount } = this.state;
    return (
      <div className="App">
        <h1>Calendar Puzzle Solver with Day of Week</h1>
        <div>
          Solver for{" "}
          <a href="https://filmmings.com/products/daily-calendar-puzzle">
            Filmmings
          </a>{" "}
          Daily Calendar Puzzle
          <br />
          View Source on{" "}
          <a href="https://github.com/Restingsound/calendar-puzzle-solver">
            Github
          </a>
        </div>
        <div className="Container">
          <div className="PerspectiveBox">
            <Calendar
              month={month}
              day={day}
              dayName={dayName}
              onChange={this.handleChange}
            />
            <CalendarBackground />
            {solutions[index] && <SolutionView solution={solutions[index]} />}
          </div>
        </div>

        <div className="Solutions">
          <div
            className={`SolutionItem ${solutionCount === 1 ? "selected" : ""}`}
            onClick={() => this.solCountChange(1)}
          >
            Single Solution
          </div>
          <div
            className={`SolutionItem ${solutionCount === 50 ? "selected" : ""}`}
            onClick={() => this.solCountChange(50)}
          >
            50 Solutions
          </div>
          <div
            className={`SolutionItem ${solutionCount === 0 ? "selected" : ""}`}
            onClick={() => this.solCountChange(0)}
          >
            All Solutions (Slow)
          </div>
        </div>
        <div>
          Puzzle for {this.longDayNames[dayName]}, {this.longMonthNames[month]}{" "}
          {day}
          {this.nth(day)}
          <br />
          {solutionCount === 0 ? (
            <div>
              {" "}
              Found all {solutions.length} possible solutions for this puzzle.
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {solutions.length > 1 ? (
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
          <div></div>
        )}
        <div>
          This page was created by{" "}
          <a href="https://github.com/Restingsound">Scott Mulderig</a>
        </div>
      </div>
    );
  }
}
