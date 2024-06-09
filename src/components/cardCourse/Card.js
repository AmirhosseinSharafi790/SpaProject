import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Card.css";
function CardCourse({ CourseId, CourseImg, CourseTitle, CourseDesc }) {
  return (
    <Card>
      <Card.Img variant="top" src={CourseImg} />
      <Card.Body>
        <Card.Title className="fs-4">{CourseTitle}</Card.Title>
        <Card.Text className="fs-5">{CourseDesc}</Card.Text>
        <Button variant="primary btn">
          <Link className="buy-btn" to={`/course/${CourseId}`}>
            خرید دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCourse;
