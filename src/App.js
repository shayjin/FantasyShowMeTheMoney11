import logo from './logo.svg';
import './App.css';
import { Rules } from "./Rules";
import { Strategy } from "./Strategy";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';


function NavBar() {
  return (
    <>
    {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="">판타지 쇼미더머니 11</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  판타지 쇼미더머니 11
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="">홈</Nav.Link>
                  <Nav.Link to="/Rules">규칙</Nav.Link>
                  <Nav.Link to="/Strategy">전략</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

function ScoreBoard(props) {
  var p = [[], [], [] ,[]];
  var points = {};

  for (var j = 0; j < 4; j++) {

    p[j].push(props.players[j+1]);
    var point = 0;

    for (var i = 0; i < props.possessions[j].length; i++) {
      var ddc;
      ddc = props.possessions[j][i];
      p[j].push(ddc);
      point += props.rappers[props.possessions[j][i]];
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
      <th scope="col">{i}픽</th>
    )
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
          {keys.map(x => (
                <tr>
                  <th scope="row" key={p[x]}>{index++}</th>
                    {p[x].map (y => (
                      <td key={x + y}>{y}</td>
                    ))}
                  <td key={index}>{points[x]}</td>
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
        <td class="table-danger">1등</td>
        <td class="table-danger">7점</td>
      </tr>
      <tr>
        <td class="table-primary">2등</td>
        <td class="table-primary">6점</td>
      </tr>
      <tr>
        <td class="table-success">3등</td>
        <td class="table-success">5점</td>
      </tr>
      <tr>
        <td class="table-info">4등</td>
        <td class="table-info">4점</td>
      </tr>
      <tr>
        <td class="table-active">세미파이널 진출 (8명)</td>
        <td class="table-active">3점</td>
      </tr>
      <tr>
        <td class="table-light">본선 1차 진출 (14명)</td>
        <td class="table-light">2점</td>
      </tr>
      <tr>
        <td class="table-dark">디스전 진출  (16명)</td>
        <td class="table-dark">1점</td>
      </tr>
      <tr>
        <td class="table-warning">음원미션 진출  (8명)</td>
        <td class="table-warning">0점</td>
      </tr>
      </tbody>
    </Table>
  );
}

function Main() {
  let players = {1: "Ella", 2: "Jin", 3: "Shay", 4: "Woong"};

  let possessions = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

  // 탈락자
  let 음원 = [""];
  let 디스 = [];
  let 본선 = [];
  let 세미 = [];
  let fourth = "";
  let third = "";
  let second = "";
  let first = "";

  let rounds = [음원, 디스, 본선,세미, fourth, third, second, first];

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
      <ScoreBoard players={players} possessions={possessions} rappers={rappers}></ScoreBoard>
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
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Strategy" element={<Strategy />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
    </>
  );
}

export default App;
