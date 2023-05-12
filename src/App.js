import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from './components/Layouts';
import './i18n/index';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PrivateRoutes from './middleware/PrivateRoutes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('language')) {
      i18n.changeLanguage(localStorage.getItem('language'));
    }
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta
          property="og:image"
          content="https://minio.lattehub.com/img/240/240/resize/6132e7b418347c0008ac3de4/2021/09/19/latte-image-61467ef6052d8ed2b6722dbd.jpeg"
        ></meta>
      </Helmet>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout ? route.layout : DefaultLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout ? route.layout : DefaultLayout;
              return (
                <Route key={index} element={<PrivateRoutes />}>
                  <Route
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                </Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
