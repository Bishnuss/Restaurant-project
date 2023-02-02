import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from '../Operatingtime';
import Review from '../Review';
import { useDispatch, useSelector} from 'react-redux';





function ViewRest() {
  const params = useParams()

  //   const [allrestaurent, setallrestaurent] = useState([])
  //   // function to API call for datas inside json file

  //   const getrestaurentdata = async () => {
  //     await fetch('/restaurants.json')
  //       .then(data => {
  //         data.json()
  //           .then(result => {
  //             setallrestaurent(result.restaurants)
  //           })
  //       })
  //   }

    // console.log(allrestaurent);


    useEffect(() => {
      // getrestaurentdata()
    }, [])

    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result

    const restData=restaurantList.find(item=>item.id==params.id)
    //  console.log(restData);
  



  return (
    <>
    {restData?(


      <Row>
        <Container  className='w-25 ms-4 mt-4 mb-5'>
        <Image className='rounded-pill' src={restData.photograph} fluid />
        </Container>
        <Col className='text-center'>
        <h1 className='text-light fw-bolder'>{restData.name}</h1>
        <h3>{restData.neighborhood}</h3>
        <h4>Cuisine Type : {restData.cuisine_type}</h4>



        <Operatingtime timedata={restData.operating_hours}></Operatingtime>
        <br></br>
        <Review reviewData={restData.reviews}></Review>


        </Col>

      </Row>

    ):'null'}
    </>
  )
}

export default ViewRest