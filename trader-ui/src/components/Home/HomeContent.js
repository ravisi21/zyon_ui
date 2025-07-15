import Header from "./Header";
import TopContent from "./TopContent";
import ZyonChallenge from "./ZyonChallenge";
import ZyonAnalytics from "./ZyonAnalytics";
import ZyonVirtualTrading from "./ZyonVirtualTrading";
import ZyonAlgoHub from "./ZyonAlgoHub";

function Home() {
  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <TopContent />
      </div>

      <div id="zyon-challenge">
        <ZyonChallenge />
      </div>
      
      <div id="zyon-pro-analytics">
        <ZyonAnalytics />
      </div>
      
      <div id="zyon-virtual-trading">
        <ZyonVirtualTrading />
      </div>
      
      <div id="zyon-algo-hub">
        <ZyonAlgoHub />
      </div>
    </div>
  );
}

export default Home;
