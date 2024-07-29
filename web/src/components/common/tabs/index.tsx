import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  animatedUnderline,
  tabsContent,
  tabsList,
  tabsTrigger,
} from './tabs.styles';

const Tabs = TabsPrimitive.Root;

const StyledTabsList = styled(TabsPrimitive.List)`
  ${tabsList}
`;
const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
  ${tabsTrigger}
`;
const StyledTabsContent = styled(TabsPrimitive.Content)`
  ${tabsContent}
`;
const AnimatedUnderline = styled(motion.div)`
  ${animatedUnderline}
`;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  const [searchParams] = useSearchParams();
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, React.Children.count(children));
  }, [children]);

  useEffect(() => {
    const type = searchParams.get('type');
    const index = React.Children.toArray(children).findIndex(
      child => React.isValidElement(child) && child.props.value === type
    );
    setActiveTabIndex(index !== -1 ? index : 0);
  }, [searchParams, children]);

  return (
    <StyledTabsList ref={ref} className={className} {...props}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          ref: (el: HTMLButtonElement) => (tabRefs.current[index] = el),
          onClick: () => setActiveTabIndex(index),
        })
      )}
      {activeTabIndex !== null && (
        <AnimatedUnderline
          initial={false}
          animate={{
            width: tabRefs.current[activeTabIndex]?.offsetWidth,
            x: tabRefs.current[activeTabIndex]?.offsetLeft,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </StyledTabsList>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <StyledTabsTrigger ref={ref} className={className} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <StyledTabsContent ref={ref} className={className} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
