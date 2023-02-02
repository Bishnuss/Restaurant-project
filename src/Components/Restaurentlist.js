import React from 'react'
import { useState, useEffect } from 'react'
import ReastCard from './ReastCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {restaurentListAction} from '../actions/restaurentAction'
import { useDispatch, useSelector} from 'react-redux';




function Restaurentlist() {

    const dispatch=useDispatch()

    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result
    useEffect(() => {
        dispatch(restaurentListAction())
        // getrestaurentdata()
    }, [])

    return (

        <Row>

            {
                restaurantList.map(item=>(

                    < ReastCard data={item}/>

                ))
            }

        </Row>
    )
        }

export default Restaurentlist