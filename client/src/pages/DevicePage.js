import React from 'react';
import { Button, Card, Col,Container,Image,Row } from 'react-bootstrap';
import bigStar from "../assets/bigStar.png"

const DevicePage = () => {
    const device =  {id:1, name: "12 pro", price: 1500, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" }
    const description = [
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '12мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'количество ядер', description: '2'},
        {id:4, title: 'Аккумулятор', description: '4000'}
    ]
    return (

      <Container className="mt-3">
      <Row>
      <Col md={4}>
            <Image width={300} height={300} src={device.img}/>
          </Col>
          <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
                <h2>{device.name}</h2>
                <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                    {device.rating}
                </div>
            </Row>
          </Col>
          <Col md={4}>
           <Card  className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
               <h3>{device.price} USD</h3>
               <Button variant={"outline-dark"}>Add to cart</Button>
           </Card>
          </Col>
         </Row>
         <Row className="d-flex flex-column m-3">
         <h1>Overview</h1>
         {description.map((info,index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
         </Row>
         )}
         </Row>
      </Container>
         
    );
};

export default DevicePage;