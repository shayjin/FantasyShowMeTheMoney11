import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Table from 'react-bootstrap/Table';


function NavBar() {
  return (
    <>
    {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="">판타지 쇼미더머니 11</Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

function ScoreBoard(props) {
  var p = [[], [], [], []];
  var points = {};
  var added;
  var ddc;

  for (var j = 0; j < 4; j++) {
    p[j].push({name: props.players[j+1], color:""});
    var point = 0;

    for (var i = 0; i < props.possessions[j].length; i++) {
      ddc = props.possessions[j][i];
      added = false;

      point += props.rappers[props.possessions[j][i]];
      for (var k = 0; k < props.rounds.length; k++) {
        for (var l = 0; l < props.rounds[k].length; l++) {
          if (props.rounds[k].includes(ddc) && !added) {
            p[j].push({name: ddc, color: props.colors[k]});
            
            added = true;
          }
        }
      }
      if (!added) {
        p[j].push({name: ddc, color: ""});
      }
    }
    points[j] = point;
  }

  var items = Object.keys(points).map(
    (key) => { return [key, points[key]] });

  items.sort(
    (first, second) => { return first[1] - second[1] }
  );
  
  var keys = items.map(
    (e) => { return e[0] });
  
  var index = 1;

  keys=keys.reverse();

  var pick = [];

  for (var i = 1; i <= 6; i++) {
    pick.push(
      <th scope="col" >{i}픽</th>
    )
  }

  var datas = [];

  for (var possession in p) {
    for (var rapper in p[possession]) {
      datas.push(<td>{rapper}</td>);
    }
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          {pick}
          <th>점수</th>
        </tr>
      </thead>
      <tbody>
        {keys.map(key => (
          <tr>
            <th scope="row" key={key}>{index}</th>
              {p[key].map(rapper => (
                <td class={rapper.color}>{rapper.name}</td>
            ))}
            <td key={index}>{points[keys[index++ - 1]]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function Points() {
  return (
    <Table>
      <tbody>
      <tr>
        <td class="bg-danger">1등</td>
        <td class="bg-danger">8점</td>
      </tr>
      <tr>
        <td class="bg-warning">2등</td>
        <td class="bg-warning">7점</td>
      </tr>
      <tr>
        <td class="bg-primary">3등</td>
        <td class="bg-primary">6점</td>
      </tr>
      <tr>
        <td class="bg-success">4등</td>
        <td class="bg-success">5점</td>
      </tr>
      <tr>
        <td class="table-danger">세미파이널 탈락 (4명)</td>
        <td class="table-danger">4점</td>
      </tr>
      <tr>
        <td class="table-warning">본선 1차 탈락 (6명)</td>
        <td class="table-warning">3점</td>
      </tr>
      <tr>
        <td class="table-primary">디스전 탈락  (2명)</td>
        <td class="table-primary">2점</td>
      </tr>
      <tr>
        <td class="table-success">음원미션 탈락 (4명)</td>
        <td class="table-success">1점</td>
      </tr>
      <tr>
        <td class="table-dark">마이크선택 탈락 (4명)</td>
        <td class="table-dark">0점</td>
      </tr>
      </tbody>
    </Table>
  );
}

function Main() {
  let players = {1: "Jin", 2: "Ella", 3: "Shay", 4: "Woong"};

  let possessions = [
    ["이영지", "칠린호미", "크루셜스타", "제이켠", "김재욱", "김도윤"],
    ["던말릭", "플리키뱅", "언오피셜보이", "로스", "다민이", "박명훈"],
    ["허성현", "QM", "칸", "키츠요지", "맥대디", "토이고"],
    ["NSW yoon", "노윤하", "잠비노", "블라세", "폴로다레드", "신세인"],
  ];

  // 탈락자
  let 마이크선택 = ["김도윤", "박명훈", "키츠요지", "언오피셜보이"];
  let 음원 = ["폴로다레드", "맥대디", "제이켠", "김재욱"];
  let 디스 = [];
  let 본선 = [];
  let 세미 = [];
  let fourth = "";
  let third = "";
  let second = "";
  let first = "";

  let rounds = [마이크선택, 음원, 디스, 본선,세미, fourth, third, second, first];
  let colors = ["table-dark", "table-success","table-primary","table-warning",
  "table-danger","bg-success","bg-primary","bg-warning", "bg-danger"];

  var curr = 0;

  for (var round in rounds) {
    if (rounds[round].length != 0 || rounds[round] != "") {
      curr += 1;
    }
  }

  let rappers = {
    "박명훈": curr, "신세인": curr, "토이고": curr, "제이켠": curr, "잠비노": curr, "이영지": curr,
    "로스": curr, "맥대디": curr, "던말릭": curr, "언오피셜보이": curr, "칸": curr, "허성현": curr,
    "다민이": curr, "김도윤": curr, "NSW yoon": curr, "크루셜스타": curr, "QM": curr, "김재욱": curr,
    "노윤하": curr, "블라세": curr, "칠린호미": curr, "키츠요지": curr, "폴로다레드": curr, "플리키뱅": curr
  };

  for (var round in rounds) {
    for (var rapper in rounds[round]) {
      rapper = rounds[round][rapper];
      rappers[rapper] = parseInt(round);
    }
  }

  return (
    <div>
      <ScoreBoard players={players} possessions={possessions} rappers={rappers} rounds={rounds} colors={colors}></ScoreBoard>
      <Points></Points>
    </div>
    
  );
}

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Routes>
          <Route path="/FantasyShowMeTheMoney11" element={<Main />} />
          <Route path="" element={<Main />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    </>
  );
}

export default App;
