import Header from '~/components/Layouts/DefaultLayout/Header';
// import { useTranslation } from 'react-i18next';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;
