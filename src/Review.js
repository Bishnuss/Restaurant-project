import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button className='mt-4 container w-25'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                reviewData.map(item=>


            <Card className='container w-50 mt-3 mb-2 rounded-pill py-4' body style={{ width: '400px' }}>
                <h4 className='text-white text-center fw-bolder'>{item.name} </h4>
                <h6>{item.date}</h6>
                <h6 className='text-primary'>{item.rating} ★</h6>

                <h6>{item.comments}</h6>
            </Card>
            )
                        }

          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Review