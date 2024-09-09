import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center background-gradient">
      <div className="space-y-2 lg:space-y-10 w-full p-4">
        <Header />
        <div className="h-[85vh] flex w-full">
          <ChatSection />
        </div>
      </div>
    </main>
  );
}
