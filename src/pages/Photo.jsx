import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button, Space, Tag } from "antd";
import SkeletonElement from "../components/UI/skeleton/SkeletonElement";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoById } from "../store/slices/photosSlice";

const Photo = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const photo = useSelector((state) => state.photos.photo.item);
  const status = useSelector((state) => state.photos.photo.status);
  const error = useSelector((state) => state.photos.photo.error);

  useEffect(() => {
    dispatch(getPhotoById(params.id));
  }, [dispatch, params.id]);

  let content;

  if (status === "loading") {
    content = <SkeletonElement />;
  } else if (status === "succeeded") {
    content = (
      <div className="photo-page-wrapper">
        <div className="photo-page">
          <div className="photo-page-img">
            <img src={photo.urls?.small} alt="" />
          </div>
          <div className="photo-datas">
            <h2 className="photo-title">
              {String(photo.alt_description).charAt(0).toUpperCase() +
                String(photo.alt_description).slice(1)}
            </h2>
            <div className="photo-info">
              <p className="photo-created-at">
                Created at{" "}
                {new Date(photo.created_at)
                  .toLocaleDateString("ru-RU")
                  .replace(".", "-")
                  .split("T")[0]
                  .replace(".", "-")}
              </p>
              {photo?.location?.name ? (
                <div className="photo-location">
                  <span className="material-symbols-outlined">location_on</span>
                  {photo?.location?.name ? photo?.location?.name + "," : ""}
                </div>
              ) : (
                ""
              )}
            </div>
            {photo?.tags ? (
              <Space className="photo-tags" size={[0, 8]} wrap>
                {photo?.tags?.map((tag) => (
                  <Tag key={nanoid()} color={tag?.source?.cover_photo?.color}>
                    {tag.title}
                  </Tag>
                ))}
              </Space>
            ) : (
              ""
            )}
            {photo?.description ? (
              <p className="photo-description">{photo.description}</p>
            ) : (
              ""
            )}
            <a
              href={photo?.links?.download}
              download
              className="download-image-link"
            >
              <Button type="primary">Download image</Button>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="photo-page">
      <div className="container">
        <div className="wrapper">{content}</div>
      </div>
    </div>
  );
};

export default Photo;
