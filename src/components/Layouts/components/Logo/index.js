import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import Select from '~/components/common/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Form from '~/components/common/Form';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function Logo(props) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const form = useForm({
    defaultValues: {
      language: 'vi',
    },
  });
  const changeLanguage = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
    localStorage.setItem('language', value);
  };
  const [language, setLanguage] = useState('');
  useEffect(() => {
    if (localStorage.getItem('language')) {
      i18n.changeLanguage(localStorage.getItem('language'));
      setLanguage(localStorage.getItem('language'));
    }
  }, []);
  return (
    <div className="bg-grey">
      <div className={`container mx-auto header-logo py-0.5 flex items-center justify-between`}>
        <div></div>
        <div>{props.image && <img className={`${cx('header-logo__image')} cursor-pointer`} src={props.image} />}</div>
        <div className="cursor-pointer flex items-center justify-center">
          <Form form={form}>
            <Select
              onChange={changeLanguage}
              name="language"
              value={language}
              options={[
                { label: 'Tiếng việt', value: 'vi' },
                { label: 'English', value: 'en' },
              ]}
            />
          </Form>
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <div className="pl-0.5">
            <div className={`p-0.5 `} onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logo;
