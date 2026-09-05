import SiteNav from "@/components/chat/SiteNav";
import ChatHome from "@/components/chat/ChatHome";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
      <SiteNav />
      <ChatHome />
    </div>
  );
}
