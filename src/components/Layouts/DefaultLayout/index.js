import Header from '~/components/Layouts/DefaultLayout/Header';
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
