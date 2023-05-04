import React from 'react'
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
export default function AboutComponents() {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src="https://img.freepik.com/free-photo/young-women-with-movie-film-reel_53876-146444.jpg?size=626&ext=jpg&ga=GA1.1.1198234022.1676965362&semt=robertav1_2_sidr" style={{opacity: "0.4",height: '500'}} class="card-img" alt="Netfex"/>
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1 class="card-title m-5 fs-1">About Us</h1>
            <p class="card-text ">
            This movie gives you nonstop pain!<br/>
            In all movies pain and joy are mostly together to gives a break to audience!<br/>
            But after lots of sad moments in the last scene it leaves you with a bad feeling of lost and regret.<br/>
            But anyway i likes the moral of story!<br/>
            Do what ever you like to do before it's too late.<br/>
            </p>
        </div>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap  '>
      <Card style={{ width: '18rem',margin: '20px 10px 20px 0px' }}>
        <Card.Img variant="top" src="https://static.javatpoint.com/best/images/best-hollywood-movies-of-all-time5.png" />
            <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark' >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
            </Card.Body>
      </Card>
      <Card style={{ width: '18rem',margin: '20px 10px 20px 0px' }}>
        <Card.Img variant="top" src="https://static.javatpoint.com/best/images/best-hollywood-movies-of-all-time5.png" />
            <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark' >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
            </Card.Body>
      </Card>
      <Card style={{ width: '18rem',margin: '20px 10px 20px 0px' }}>
        <Card.Img variant="top" src="https://static.javatpoint.com/best/images/best-hollywood-movies-of-all-time5.png" />
            <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark' >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
            </Card.Body>
      </Card>
      <Card style={{ width: '18rem',margin: '20px 10px 20px 0px' }}>
        <Card.Img variant="top" src="https://static.javatpoint.com/best/images/best-hollywood-movies-of-all-time5.png" />
            <Card.Body>
                <Card.Title className='text-dark'>Card Title</Card.Title>
                <Card.Text className='text-dark' >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
            </Card.Body>
      </Card>
      </div>
    </div>
  );
}
