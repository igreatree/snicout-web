import { Anchor, Group, Title } from '@mantine/core';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <Group bg="blue" w="100%" p="lg" justify="center" className={styles.header}>
      <Group justify="space-between" w="60%">
        <Title c="white">sNicOut</Title>

        <Group>
          <Anchor underline="hover" c="white" href="#">
            About Us
          </Anchor>
          <Anchor underline="hover" c="white" href="#">
            Features
          </Anchor>
          <Anchor underline="hover" c="white" href="#">
            Support
          </Anchor>
        </Group>
      </Group>
    </Group>
  );
};
