import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <div>
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
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;