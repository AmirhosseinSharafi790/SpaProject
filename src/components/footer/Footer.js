import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footerbg">
      <Container>
        <Row className="py-5">
          <Col md={6} className="">
            <h2 className="fs-2">رسالت دیمیروان</h2>
            <p className="fs-5">
              دیمیروان با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ یادگیری
              لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
            </p>
          </Col>
          <Col md={6} className="text-end">
            <img
              src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
