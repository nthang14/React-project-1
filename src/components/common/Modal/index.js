import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Modal({ visible, close, className, children }) {
  return (
    <>
      {visible && (
        <div className="modal-bg flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className={`relative  mx-auto ${className}`}>
            <div className="max-w-sm modal-min-width border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-end  border-gray-300  px-0.5 py-px my-px">
                <span className="cursor-pointer" onClick={close}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </span>
              </div>
              <div className="relative flex-auto p-0.5">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
