import Layout from '../components/Layout';
import Tabs from '../components/Tabs';

export default function Streams() {
  const tabs = [
    {
      key: 'gaming',
      label: 'Gaming with Infamous',
      content: (
        <>
          <h3>Wo Long: Fallen Dynasty</h3>
          <div id="rumble_v6t32ip"></div>
          <script suppressHydrationWarning src="https://rumble.com/embedJS/u2plz5t.js"></script>
          <script suppressHydrationWarning dangerouslySetInnerHTML={{
            __html: `Rumble("play", {"video":"v6t32ip","div":"rumble_v6t32ip"});`
          }}/>
        </>
      )
    },
    {
      key: 'weirdness',
      label: 'Wonderful World of Weirdness',
      content: (
        <>
          <h3>Weird Science</h3>
          <div id="rumble_v6tb2bz"></div>
          <script suppressHydrationWarning src="https://rumble.com/embedJS/u2plz5t.js"></script>
          <script suppressHydrationWarning dangerouslySetInnerHTML={{
            __html: `Rumble("play", {"video":"v6tb2bz","div":"rumble_v6tb2bz"});`
          }}/>
          <h3>The Cut</h3>
          <div id="rumble_v6tat61"></div>
          <script suppressHydrationWarning src="https://rumble.com/embedJS/u2plz5t.js"></script>
          <script suppressHydrationWarning dangerouslySetInnerHTML={{
            __html: `Rumble("play", {"video":"v6tat61","div":"rumble_v6tat61"});`
          }}/>
        </>
      )
    },
    {
      key: 'praetorian',
      label: 'The Praetorian',
      content: <p>Coming soon – embed your political stream here.</p>
    },
    {
      key: 'storyteller',
      label: 'Storyteller / Earth',
      content: <p>Coming soon – embed your storytelling channel here.</p>
    }
  ];

  return (
    <Layout>
      <h1>Live Streams</h1>
      <Tabs tabs={tabs} />
    </Layout>
  );
}
