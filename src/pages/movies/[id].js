
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY,BASE_PATH } from '../../lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function Movie() {
	const router = useRouter();
	console.log(router.query);
	const [id, setId] = useState(router.query.id);
	const [movie, setMovie] = useState({});
	const [key, setKey] = useState();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleClick = () => setClick(true);
	const handleShow = () => setShow(true);

	useEffect(() => {
		fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setMovie(data);
			});
		fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('movie is from ', data);
				const key = data.results[0].key;
				setKey(key);
			})
			.catch((err) => {
				console.log(err);
				
			});
	}, []);
	console.log(movie);
	return (
		<div className="container">
			<div className="container text-center">
				<div className="row">
					<div className="col-4">
						<Card>
							<Card.Img
								variant="top"
								src={
									movie.backdrop_path
										? BASE_PATH + movie.backdrop_path
										: 'https://img.freepik.com/premium-vector/funny-colorful-monkey-with-hat-sunglasses-graffiti-artwork-style_747026-41.jpg?w=2000'
								}
							/>
							<Card.Body>
							
							</Card.Body>
						</Card>
					</div>
					<div className="col-8 ">
						<div className=' m-5'>
							<Card>
								<Card.Body>
									<Card.Title>{movie.title ? movie.title : 'Unknow'}</Card.Title>
								</Card.Body>
								<p>{movie.overview ? movie.overview : 'Unknow'}</p>
							</Card>
								<Button
									variant="primary"
									onClick={handleShow}>
									Watch
								</Button>
							
						</div>
						<div>
              <Modal show={show} onHide={handleClose} size="lg">
                  <div class="ratio ratio-16x9">
                      <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video" allowfullscreen></iframe>
                  </div>
              </Modal>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}
