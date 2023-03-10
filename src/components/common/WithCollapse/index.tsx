import React, { ReactNode, useState } from 'react';
import CollapseContainer from '../CollapseContainer';

interface CollapseHOCProps {
  title: string;
  children: ReactNode;
}

const WithCollapse = ({ title, children }: CollapseHOCProps) => {
  const [open, setOpen] = useState(true);

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <CollapseContainer title={title} open={open} handleCollapsed={handleCollapsed}>
        {children}
      </CollapseContainer>
    </>
  );
};

export default WithCollapse;
