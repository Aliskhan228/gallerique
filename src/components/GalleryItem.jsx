import { Button, Image } from "antd";
import { Link } from "react-router-dom";

const GalleryItem = ({ src, id }) => {
  const previewType = () => {
    if (window.innerWidth <= 480) return false;

    return true;
  };

  return (
    <div className="gallery-image">
      <Image src={src} preview={previewType()} />
      <Link to={`/gallery/${id}`}>
        <Button className="gallery-image__btn">About Image</Button>
      </Link>
    </div>
  );
};

export default GalleryItem;
