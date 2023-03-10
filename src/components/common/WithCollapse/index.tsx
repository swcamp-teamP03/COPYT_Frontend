import React, { ReactNode, useState } from 'react';
import CollapseContainer from '../CollapseContainer';

interface CollapseHOCProps {
  title: string;
  children: ReactNode;
  numbering?: number;
}

const WithCollapse = ({ title, children, numbering }: CollapseHOCProps) => {
  const [open, setOpen] = useState(true);

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <CollapseContainer title={title} open={open} handleCollapsed={handleCollapsed} numbering={numbering}>
        {children}
      </CollapseContainer>
    </>
  );
};

export default WithCollapse;
