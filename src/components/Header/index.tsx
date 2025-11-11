import { Anchor, Group, Title } from '@mantine/core';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <Group w="100%" p="lg" justify="center" className={styles.header}>
      <Group justify="space-between" w="60%">
        <Title>sNicOut</Title>

        <Group>
          <Anchor underline="hover" c="black" href="#">
            About Us
          </Anchor>
          <Anchor underline="hover" c="black" href="#">
            Features
          </Anchor>
          <Anchor underline="hover" c="black" href="#">
            Support
          </Anchor>
        </Group>
      </Group>
    </Group>
  );
};
