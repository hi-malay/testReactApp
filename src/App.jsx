import "./App.css";
// import MemoryGame from "./components/MemoryGame";
// import Carousel from "./components/carousel";
// import DragAndDrop from "./components/dragAndDrop";
// import Mymodal from "./components/myModal";
import RandomCircle from "./components/randomCircle";
// import UndoCounter from "./components/undoCounter";
// import AddSumAvatarAi from "./components/addSumAvatarAi";
// import BreadCrumps from "./components/breadCrumps";
// import Chessboard from "./components/chesBoard";
// import { CheckTimeOutC } from "./components/clickTimeoutC";
// import OptLogin from "./components/otpLogin";
// import ShoppingList from "./components/shoppingList";
// import StartRating from "./components/startRating";
// import UserefAsUseeffect from "./components/userefAsUseeffect";
// import { ClickTimeout } from "./components/clickTimeout";
// import FileExplorer from "./components/fileExplorer";
// import ProgressBar from "./components/progressBar";
// import Steps from "./components/steps";

const App = () => {
  const images = [
    "https://via.placeholder.com/800x300?text=Slide+1",
    "https://via.placeholder.com/800x300?text=Slide+2",
    "https://via.placeholder.com/800x300?text=Slide+3",
  ];

  return (
    <div className="main">
      {/* <ClickTimeout /> */}
      {/*<ProgressBar /> */}
      {/* <Steps /> */}
      {/* <FileExplorer /> */}
      {/* {<BreadCrumps />} */}
      {/* {<OptLogin otpInputCount={3} />} */}
      {/* {<UserefAsUseeffect />} */}
      {/* {<StartRating count={4} />} */}
      {/* {<AddSumAvatarAi />} */}
      {/* {<Chessboard />} */}
      {/* <CheckTimeOutC /> */}
      {/* <ShoppingList /> */}
      {/* {<UndoCounter />} */}
      {/* {<MemoryGame count={16} />} */}
      {/* <Mymodal /> */}
      {/* <DragAndDrop /> Pending */}
      {/* <Carousel images={images} /> */}
      <RandomCircle />
    </div>
  );
};

export default App;
