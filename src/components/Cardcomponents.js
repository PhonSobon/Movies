import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BASE_PATH } from "@/lib";
import { useRouter } from "next/router";
export default function Cardcomponents({ title, description, imagePath, id}) {

    const router = useRouter();
     const handleClick = () =>{
      router.push(`/movies/${id}`);
     }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            imagePath ?
            BASE_PATH+imagePath :
             "https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{title ? title : "Unkonw"}</Card.Title>
          <Card.Text>
            {description ? description : `Some quick example text to build on the card title and make up the bulk of the card's content.`}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button size={"sm"} onClick={handleClick} variant="primary">View Detail</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
