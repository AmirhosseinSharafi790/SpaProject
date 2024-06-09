import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import Coding from "../../assets/images/Coding.svg";
import CardCourse from "../../components/cardCourse/Card";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { courseDate } from "../../date";

function Home() {
  const [courses, setCourses] = useState(courseDate);
  return (
    <div>
      <MyNavbar />
      <Container fluid="md">
        <Row className="align-items-center my-5">
          <Col lg={6}>
            <h1 className="py-2" style={{ fontFamily: "lalezar" }}>
              برنامه نویسی با دیمیروان
            </h1>
            <p
              style={{
                fontFamily: "Yekan",
                textAlign: "justify",
                fontSize: "18px",
              }}
              className=""
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg={6}>
            <img src={Coding} className="img-fluid" alt="" />
          </Col>
        </Row>

        <Row className="my-5">
          <h2 className="my-5">دوره های آموزشی</h2>
          {courses.map((course) => (
            <Col key={course.CourseId} className="py-3" md={6} lg={4} xl={3}>
              <CardCourse {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
