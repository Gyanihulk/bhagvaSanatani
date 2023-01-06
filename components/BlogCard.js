import { Col } from "react-bootstrap";
import { urlFor } from "../lib/client";

export const BlogCard = ({ data }) => {
  console.log(data)
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={urlFor(data.headerImg)} />
        <div className="proj-txtx">
          <h4>{data.title}</h4>
          <span>{data.description}</span>
        </div>
      </div>
    </Col>
  )
}