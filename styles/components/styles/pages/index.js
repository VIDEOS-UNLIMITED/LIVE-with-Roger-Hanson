import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Live with Roger Hanson</h1>
      <p>Streaming gaming, politics, current events, and the strange.</p>
      <h2>Featured Live Stream</h2>
      {/* Paste your featured Rumble embed here */}
      <div id="rumble_v6tedbl"></div>
      <script suppressHydrationWarning src="https://rumble.com/embedJS/u2plz5t.js"></script>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            Rumble("play", {"video":"v6tedbl","div":"rumble_v6tedbl"});
          `
        }}
      />
    </Layout>
  );
}
