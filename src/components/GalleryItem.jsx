import { Button, Image } from "antd";
import { Link } from "react-router-dom";

const GalleryItem = ({ src, id }) => {
  return (
    <div className="gallery-image">
      <Image src={src} />
      <Link to={`/gallery/${id}`}>
        <Button className="gallery-image__btn">About Image</Button>
      </Link>
    </div>
  );
};

export default GalleryItem;
