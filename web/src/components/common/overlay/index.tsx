import { AnimatePresence } from 'framer-motion';
import { OverlayBackground } from './overlay.styles';

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Overlay = ({ isOpen, onClose }: OverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <OverlayBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
};
