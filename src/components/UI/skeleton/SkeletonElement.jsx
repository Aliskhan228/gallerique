import { Skeleton } from "antd";
import styles from "./SkeletonElement.module.scss";

const SkeletonElement = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton.Image active size={150} />
      <div className={styles.skeletonData}>
        <Skeleton.Input active size={30} />
        <Skeleton.Input active size={20} />
        <Skeleton.Input active size={20} />
        <div className={styles.skeletonTags}>
          <Skeleton.Button active size={20} />
          <Skeleton.Button active size={20} />
          <Skeleton.Button active size={20} />
          <Skeleton.Button active size={20} />
          <Skeleton.Button active size={20} />
          <Skeleton.Button active size={20} />
        </div>
        <Skeleton
          active
          paragraph={{
            rows: 4,
            width: 200,
          }}
        />
        <Skeleton.Button active />
      </div>
    </div>
  );
};

export default SkeletonElement;
