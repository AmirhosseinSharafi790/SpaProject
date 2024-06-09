import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import "./Blog.css";
function Blog() {
  return (
    <div className="BlogWrapper">
      <MyNavbar />
      <h1>صفحه مقالات</h1>
      <hr />
      <div className="my-4">
        <Link to={"js"} className="btn-blog">
          js Blog
        </Link>
        <Link to={"react"} className="btn-blog">
          react Blog
        </Link>
        <Link to={"php"} className="btn-blog">
          php Blog
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Blog;
