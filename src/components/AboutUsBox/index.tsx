import { Text, Stack, Group, Title, Image } from '@mantine/core';

export const AboutUsBox = () => {
  return (
    <Group w="80%" p="lg" justify="space-between" id="about-us">
      <Stack w="50%" justify="space-around">
        <Title c="blue" size="200%">
          The Smart Way To Quit Nicotine
        </Title>
        <Text size="200%">
          Make quitting nicotine easier, natural and rewarding
        </Text>
        <Image
          radius="sm"
          w="500"
          fit="contain"
          src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
        ></Image>
      </Stack>
      <Group>
        <Image
          radius="sm"
          w="500"
          fit="contain"
          src="https://framerusercontent.com/images/AynBhhEr6mZ0HjLLawRUH0IE0Iw.png?width=1135&height=1118"
        ></Image>
      </Group>
      <Group>
        <Text size="300%" fw={500} ta="center" p="lg">
          Among people aged 12 or older in 2020, 8.5% (or about 23.6 million
          people) had nicotine dependence in the past 30 days.
        </Text>
      </Group>
      <Group>
        <Text size="200%">
          Among people aged 12 or older in 2020, 8.5% (or about 23.6 million
          people) had nicotine dependence in the past 30 days.
        </Text>
      </Group>
    </Group>
  );
};
