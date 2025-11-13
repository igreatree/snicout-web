import { Text, Stack, Group, Title, Image } from '@mantine/core';
import Mockup1 from '../../assets/mockup1.png';
import { useIsMobile } from '../../hooks';

const MobileView = () => {
  return <Title>Mobile View</Title>;
};
export const DownloadBox = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileView />;
  return (
    <Stack align="center">
      <Group p="lg" w="100%" justify="center" wrap="nowrap">
        <Stack w="50%" justify="space-around">
          <Title c="blue" fz="40">
            The Smart Way To Quit Nicotine
          </Title>
          <Text fz="30" fw="500">
            Make quitting nicotine easier, natural and rewarding
          </Text>
          <Image
            radius="sm"
            w="500"
            fit="contain"
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
          />
        </Stack>
        <Image radius="sm" w="300" src={Mockup1} />
      </Group>
      <Stack>
        <Text fz="50" fw="500" ta="center" p="lg">
          Among people aged 12 or older in 2020, 8.5% (or about 23.6 million
          people) had nicotine dependence in the past 30 days.
        </Text>
        {/* <Text fz="50" ta="center">
          Among people aged 12 or older in 2020, 8.5% (or about 23.6 million
          people) had nicotine dependence in the past 30 days.
        </Text> */}
      </Stack>
    </Stack>
  );
};
