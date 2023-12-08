import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { GlobalStyles } from 'components/GlobalStyle';
import { AppBar } from 'components/AppBar/AppBar';
import { LayoutContainer, PageContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />

      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Suspense>

      <GlobalStyles />
    </LayoutContainer>
  );
};

export default Layout;
