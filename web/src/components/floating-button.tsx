import { PlusIcon } from '@/components/common/icons';
import { useState } from 'react';
import { FloatingButtonWrapper } from './floating-button.styles';

export const FloatingButton = () => {
  const [isPlus, setIsPlus] = useState(true);

  const toggleIcon = () => {
    setIsPlus(!isPlus);
  };

  return (
    <FloatingButtonWrapper onClick={toggleIcon}>
      <PlusIcon isPlus={isPlus} />
    </FloatingButtonWrapper>
  );
};
