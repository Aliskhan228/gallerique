import { Spin } from 'antd';
import styles from './Loader.module.scss';

const Loader = () => {
  return <Spin className={styles.loader} />;
};

export default Loader;
