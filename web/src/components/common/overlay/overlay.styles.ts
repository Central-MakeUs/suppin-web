import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OverlayBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000cc;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
