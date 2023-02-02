import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'



function ReastCard({ data }) {
  console.log(data);
  return (
    

      <Col className='p-3' sm={12} md={6} lg={4} xl={3}>

        <Container>
        <Link style={{textDecoration:"none"}} to={`view-restaurant/${data.id}`}>


          <Card className='text-center mt-4' style={{ width: '100%' }}>
            <Card.Img className='fluid' variant="top" src={data.photograph} />
            <Card.Body>
              <Card.Title className='text-light fw-semibold'>{data.name}</Card.Title>
              <Card.Text>
                {data.neighborhood}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>


        </Container>

      </Col>
  )
}

export default ReastCard