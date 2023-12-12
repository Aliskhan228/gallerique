import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";

const Gallery = ({ photos, breakpoints }) => {
  return (
    <div className="gallery">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <GalleryItem key={photo.id} src={photo.urls.regular} id={photo.id} />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
