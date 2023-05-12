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
        <title>Newchic</title>
        <meta name="title" content="How to set GitHub credentials for macOS" />
        <meta
          name="description"
          content="Set up GitHub authentication so you can use it from VS Code or the command line"
        />
        <meta name="type" content="article" />
        <meta name="url" content="https://flaviocopes.com/setup-github-credentials-macos/" />
        <meta name="image" content="https://flaviocopes.com/img/avatar.png" />
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
