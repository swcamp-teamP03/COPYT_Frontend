import React from 'react';
import { Outlet } from 'react-router-dom';
import GNB from '../components/common/GNB';

interface GNBRoutProps {
  hasGNB: boolean;
}

const GNBRoute = ({ hasGNB }: GNBRoutProps) => {
  if (hasGNB) {
    return (
      <>
        <GNB>
          <Outlet />
        </GNB>
      </>
    );
  } else {
    return <Outlet />;
  }
};

export default GNBRoute;
