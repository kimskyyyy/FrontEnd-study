/* eslint-disable */
import { useState } from 'react';
import './App.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import bg from './bg.png';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
       <div>
         <div>메인페이지</div>
        <div className="main-bg" style={{ backgroundImage : 'url('+bg+')'}}></div>
        <div className="container">
        <div className="row">
          {
            shoes.map((a, i) => {
              return(
                <Product shoes={shoes[i]}/>
              )
            })
          }
        </div>
        </div>


       </div>

        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>about copany member</div>}/>
          <Route path="location" element={<div>about copany location</div>}/>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
        <Route path="*" element={<div>페이지 확인이 필요행</div>}/>
      </Routes>






     <Button variant="warning" onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result) => {
        console.log(result.data)
        let copy = [...shoes, ...result.data];
        setShoes(copy);

      })
      .catch(() => {
        console.log('요청 실패')
      })
     }}>상품 더보기</Button>{' '}

    

    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>about company</h4>
      <Outlet></Outlet>
    </div>
  )
}




function Product(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes.id + 1) +".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
    
    
  )
        
}


export default App;

