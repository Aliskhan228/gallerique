import { Button } from "antd";
import styles from "./Button.module.scss";

const ButtonElement = ({ onClick, children }) => {

  return <Button className={styles.button} onClick={onClick}>{children}</Button>;
};

export default ButtonElement;
