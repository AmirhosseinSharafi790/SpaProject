import MyNavbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { courseDate } from "../../date";
import { Container, Row, Col } from "react-bootstrap/esm";
function Course() {
  const courseId = useParams().courseId;
  console.log(courseId);
  const courseInfo = courseDate.find((course) => courseId == course.CourseId);
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row>
          <Col md={5}>
            <img src={courseInfo.CourseImg} alt="" />
          </Col>
          <Col md={7}>
            <h1 style={{ fontFamily: "lalezar" }}>{courseInfo.CourseTitle}</h1>
            <p style={{ fontSize: "20px" }}>
              نام مدرس : {courseInfo.CourseTechear}
            </p>
            <p>
              <b>{courseInfo.CourseDesc}</b>
            </p>
            <p>
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
        </Row>
      </Container>
    </div>
  );
}

export default Course;
