import { PlusIcon } from '@/components/common/icons';
import { Overlay } from '@/components/common/overlay';
import { useState } from 'react';
import { FloatingButtonWrapper } from './floating-button.styles';
import { FloatingMenu } from './floating-menu';

export const FloatingButton = () => {
  const [isPlus, setIsPlus] = useState(true);

  const toggleIcon = () => {
    setIsPlus(!isPlus);
  };

  return (
    <>
      {isPlus ? null : <FloatingMenu />}
      <FloatingButtonWrapper onClick={toggleIcon}>
        <PlusIcon isPlus={isPlus} />
      </FloatingButtonWrapper>
      <Overlay isOpen={!isPlus} onClose={() => setIsPlus(true)} />
    </>
  );
};
