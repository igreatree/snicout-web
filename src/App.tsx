import { Stack } from '@mantine/core';
import { Header } from './components/Header';
import { DownloadBox } from './components/DownloadBox';
// import { AboutUsBox } from './components/AboutUsBox';

function App() {
  return (
    <Stack align="center">
      <Header />
      <DownloadBox />
      {/* <AboutUsBox /> */}
    </Stack>
  );
}

export default App;
