import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CHEVRON } from '../../../assets/Chevron';

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.04, 0.62, 0.23, 0.98],
};

interface CollapseContainerProps {
  open: boolean;
  children: ReactNode;
  handleCollapsed: () => void;
  numbering?: number;
  title: string;
}

const CollapseContainer = ({ open, children, handleCollapsed, numbering, title }: CollapseContainerProps) => {
  return (
    <>
      <Title>
        {numbering && <Circle>{numbering}</Circle>}
        <h1>{title}</h1>
        <ChevronButton onClick={handleCollapsed} open={open}>
          {CHEVRON.up}
        </ChevronButton>
      </Title>
      <MotionWrapper>
        <motion.div variants={variants} transition={transition} initial="collapsed" animate={open ? 'open' : 'collapsed'}>
          {children}
        </motion.div>
      </MotionWrapper>
    </>
  );
};

export default CollapseContainer;

const MotionWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  h1 {
    font-size: 32px;
  }
`;

export const Circle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue30};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ChevronButtonProps {
  open: boolean;
}

export const ChevronButton = styled.div<ChevronButtonProps>`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  top: 0;
  right: 0;
  transform: rotate(${(props) => (props.open ? '0deg' : '180deg')});
  transition: trasform 0.3s, -webkit-transform 0.3s;
`;
