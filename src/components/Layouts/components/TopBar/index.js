import classNames from 'classnames/bind';
import styles from './TopBar.module.scss';
const cx = classNames.bind(styles);
function TopBar(props) {
  return <div>{props.image && <img src={props.image} />}</div>;
}
export default TopBar;
