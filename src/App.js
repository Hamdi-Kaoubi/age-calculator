import { useState } from "react";
import arrow from "./assets/images/icon-arrow.svg";
import "./index.css";

function App() {
  const [dateDay, setDateDay] = useState(null);
  const [dateMonth, setDateMonth] = useState(null);
  const [dateYear, setDateYear] = useState(null);

  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  const handleAge = () => {
    const birthDate = new Date(`${dateYear}-${dateMonth}-${dateDay}`);
    if (dateDay < "01" || dateDay > "31") {
      console.log("wrong day !")
    } else if (dateMonth < "01" || dateMonth > "12") {
      console.log("wrong month !")
    } else if (dateYear > "2024") {
      console.log("wrong year !")
    } else {
      const today = new Date();
    const Rest = Number(today - birthDate);
    const Years = Math.floor(Rest / 1000 / 60 / 60 / 24 / 365);
    const Months = Math.floor((Rest - Years) / 1000 / 60 / 60 / 24) % 12;
    const Days = Math.floor((Rest - Years - Months) / 1000 / 60 / 60) % 24;
    setYears(Years);
    setMonths(Months);
    setDays(Days);
    }
  };

  return (
    <div className="App">
      <form>
        <div className="inputs">
          <label
            className={
              (dateDay < "01" || dateDay > "31") &&
              dateDay !== "" &&
              dateDay !== null
                ? "red"
                : ""
            }
          >
            DAY
          </label>
          <input
            type="text"
            placeholder="DD"
            onChange={(e) => setDateDay(e.target.value)}
            className={
              (dateDay < "01" || dateDay > "31") &&
              dateDay !== "" &&
              dateDay !== null
                ? "red-inpt"
                : ""
            }
          />
          <p
            className={
              (dateDay < "01" || dateDay > "31") &&
              dateDay !== "" &&
              dateDay !== null
                ? "visible"
                : ""
            }
          >
            Must be a valid day
          </p>
        </div>
        <div className="inputs">
          <label
            className={
              (dateMonth < "01" || dateMonth > "12") &&
              dateMonth !== "" &&
              dateMonth !== null
                ? "red"
                : ""
            }
          >
            MONTH
          </label>
          <input
            type="text"
            placeholder="MM"
            onChange={(e) => setDateMonth(e.target.value)}
            className={
              (dateMonth < "01" || dateMonth > "12") &&
              dateMonth !== "" &&
              dateMonth !== null
                ? "red-inpt"
                : ""
            }
          />
          <p
            className={
              (dateMonth < "01" || dateMonth > "12") &&
              dateMonth !== "" &&
              dateMonth !== null
                ? "visible"
                : ""
            }
          >
            Must be a valid month
          </p>
        </div>
        <div className="inputs">
          <label
            className={
              dateYear > "2024" && dateYear !== "" && dateYear !== null
                ? "red"
                : ""
            }
          >
            YEAR
          </label>
          <input
            type="text"
            placeholder="YYYY"
            onChange={(e) => setDateYear(e.target.value)}
            className={
              dateYear > "2024" && dateYear !== "" && dateYear !== null
                ? "red-inpt"
                : ""
            }
          />
          <p
            className={
              dateYear > "2024" && dateYear !== "" && dateYear !== null
                ? "visible"
                : ""
            }
          >
            Must be a valid year
          </p>
        </div>
      </form>
      <div className="sbmt">
        <img src={arrow} alt="icon-arrow" onClick={handleAge} />
      </div>
      <div className="container">
        <h1>
          <i>
            <span>{years}</span>years
          </i>
        </h1>
        <h1>
          <i>
            <span>{months}</span>months
          </i>
        </h1>
        <h1>
          <i>
            <span>{days}</span>days
          </i>
        </h1>
      </div>
    </div>
  );
}

export default App;
