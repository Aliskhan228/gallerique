import { useContext } from "react";
import Loader from "../components/UI/loader/Loader";
import GalleryItem from "../components/GalleryItem";
import Masonry from "react-masonry-css";
import { HomeContext } from "./Home";
import PaginationComponent from "../components/UI/pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotosByQuery,
  selectSearchedPhotos,
} from "../store/slices/photosSlice";
import { Empty } from "antd";

const SearchPage = () => {
  const { limit, page, query, changePage, breakpointColumnsObj } =
    useContext(HomeContext);

  const dispatch = useDispatch();

  const photos = useSelector(selectSearchedPhotos);
  const status = useSelector((state) => state.photos.searchedPhotos.status);
  const error = useSelector((state) => state.photos.searchedPhotos.error);
  const totalPages = useSelector(
    (state) => state.photos.searchedPhotos.totalPages
  );

  useEffect(() => {
    dispatch(getPhotosByQuery({ limit, page, query }));
  }, [page, limit]);

  let content;

  if (status === "loading") {
    content = <Loader />;
  } else if (status === "succeeded") {
    content = photos.length ? (
      <div className="search-page-wrapper">
        <div className="gallery">
          <div>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {photos.map((photo) => (
                <GalleryItem
                  key={photo.id}
                  src={photo.urls.regular}
                  id={photo.id}
                />
              ))}
            </Masonry>
          </div>
          <PaginationComponent
            totalPages={totalPages}
            changePage={changePage}
            page={page}
            limit={limit}
          />
        </div>
      </div>
    ) : (
      <Empty className="no-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-page__wrapper">{content}</div>
      </div>
    </div>
  );
};

export default SearchPage;
