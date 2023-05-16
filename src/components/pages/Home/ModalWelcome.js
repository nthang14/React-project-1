import Modal from '~/components/common/Modal';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ModalWelcome({ data }) {
  const { t } = useTranslation(['auth', 'message']);

  const [isShowModal, setIsShowModal] = useState(!JSON.parse(localStorage.getItem('show-modal-welcome')));
  const handleClose = () => {
    setIsShowModal(false);
    localStorage.setItem('show-modal-welcome', true);
  };
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });
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
              <Input name="email" placeholder={t('email')} type="text" form={form} />

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
