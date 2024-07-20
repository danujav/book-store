'use client';

import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';
import { IconShoppingCart } from '@tabler/icons-react';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/cart', icon: <IconShoppingCart stroke={1.25} /> },
];


export default function Header() {

  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link, index) => (
    <a
    key={link.label || `icon-${index}`}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {typeof link.label === 'string' ? link.label : link.icon}
    </a>
  ));

  return (
    <header className={classes.header}>
    <div className={classes.inner}>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        {/* <MantineLogo size={28} /> */}
      </Group>

      <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          visibleFrom="xs"
        />
      </Group>
    </div>
  </header>
  );
}
