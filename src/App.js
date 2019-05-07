import React, { useState } from "react";

import "./App.css";

function App() {
    const [lineup, setLineup] = useState([
        "Curt",
        "Oceana",
        "Aarti",
        "Evan",
        "Brandon",
        "Hector",
        "Ryland",
        "Julie",
        "MJ",
        "Joe",
        "Destiny"
    ]);
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [current, setCurrent] = useState(true);
    const [captain1, setCaptain1] = useState("");
    const [captain2, setCaptain2] = useState("");

    function assignPerson() {
        let newLineup = lineup.slice();
        let next = newLineup.pop();
        console.log(current);
        if (current) {
            setTeam1([...team1, next]);
        } else {
            setTeam2([...team2, next]);
        }
        setLineup(shuffle(newLineup));
        setCurrent(!current);
    }
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function assignCaptains(c1, c2) {
        let roll = Math.random();
        if (roll < 0.5) {
            setCaptain1(c1);
            setCaptain2(c2);
        } else {
            setCaptain1(c2);
            setCaptain2(c1);
        }
    }

    const roster = lineup.map((e, i) => <li key={i}>{e}</li>);
    const team1Map = team1.map((e, i) => <li key={i}>{e}</li>);
    const team2Map = team2.map((e, i) => <li key={i}>{e}</li>);

    return (
        <div className="App">
            <header>
                <h1>TEAM PICKER!</h1>
            </header>
            {!captain1 ? (
                <button onClick={() => assignCaptains("Travis", "Zach")}>
                    Team Captains
                </button>
            ) : null}
            <div className="roster">
                <ul>{roster}</ul>
            </div>
            {lineup.length && captain1 ? (
                <button onClick={() => assignPerson()}>
                    Choose... Wisely!
                </button>
            ) : null}
            <main>
                <div className="team1">
                    <h1>{captain1}</h1>
                    <ul>{team1Map}</ul>
                </div>
                <div className="team2">
                    <h1>{captain2}</h1>
                    <ul>{team2Map}</ul>
                </div>
            </main>
        </div>
    );
}

export default App;
