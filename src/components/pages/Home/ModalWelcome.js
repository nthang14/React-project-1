import Modal from '~/components/common/Modal';
import Button from '~/components/common/Button';
import { useState } from 'react';
function ModalWelcome({ data }) {
  const [isShowModal, setIsShowModal] = useState(!JSON.parse(localStorage.getItem('show-modal-welcome')));
  const handleClose = () => {
    setIsShowModal(false);
    localStorage.setItem('show-modal-welcome', true);
  };
  return (
    <div>
      <Modal visible={isShowModal} close={handleClose}>
        <div className="grid grid-cols-2 gap-1">
          <div>
            <img alt={data?.image} src={data?.image} />
          </div>
          <div className="my-auto">
            <div>
              <div className="text-center font-bold pb-1.5">{data?.content?.subtitle}</div>
              <div className="text-center font-bold pb-1 text-red">{data?.content?.title}</div>
              <div className="text-center pb-1.5 text-red">On your first order </div>
              <Button className={`bg-black hover:bg-black`}>
                <div className="py-0.5 text-white ">Shop Now</div>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModalWelcome;
