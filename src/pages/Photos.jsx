import Gallery from "../components/Gallery";
import { getPagesCount } from "../components/utils/pages";
import { useEffect } from "react";
import PaginationComponent from "../components/UI/pagination/Pagination";
import { useContext } from "react";
import { HomeContext } from "./Home";
import Loader from "../components/UI/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, selectAllPhotos } from "../store/slices/photosSlice";

const Photos = () => {
  const {
    page,
    limit,
    totalPages,
    setTotalPages,
    changePage,
    breakpointColumnsObj,
  } = useContext(HomeContext);

  const dispatch = useDispatch();

  const photos = useSelector(selectAllPhotos);
  const status = useSelector((state) => state.photos.photos.status);
  const error = useSelector((state) => state.photos.photos.error);
  const totalCount = useSelector((state) => state.photos.photos.totalCount);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPhotos({ limit, page }));
    }
    setTotalPages(getPagesCount(totalCount, limit));
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(getPhotos({ limit, page }));
    setTotalPages(getPagesCount(totalCount, limit));
  }, [page, limit]);

  let content;

  if (status === "loading") {
    content = <Loader />;
  } else if (status === "succeeded") {
    content = (
      <div className="photos-wrapper">
        <Gallery
          photos={photos}
          isLoading={status === "loading" ? true : false}
          breakpoints={breakpointColumnsObj}
        />
        <PaginationComponent
          totalPages={totalPages}
          changePage={changePage}
          page={page}
          limit={limit}
        />
      </div>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="photos">
      <div className="container">
        <div className="wrapper">{content}</div>
      </div>
    </div>
  );
};

export default Photos;
