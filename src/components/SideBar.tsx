import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import React from 'react';

import { navLinks } from './Header.tsx';

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root className='md:hidden !-z-10 !bg-bgColor' opened={opened} onClose={toggle} position='right' size='50vw'>
        <Drawer.Overlay className='!-z-10' style={{ backgroundOpacity: 0.5, blur: 4 }}/>
        <Drawer.Content className='!-z-10' bg="#0A192F">
        <Drawer.Body className='mt-24 flex flex-col gap-5' bg="#0A192F">
            {navLinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='md:!hidden !z-10' color='#64FFDA' size="lg" opened={opened} onClick={toggle} />
    </>
  );
}

export default SideBar;