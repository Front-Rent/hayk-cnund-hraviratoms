import DaySection from "./DaySection/DaySection";
import GiftSection from "./GiftSection/GiftSection";
import HyurerSection from "./HyurerSection/HyurerSection";
import "./Main.scss";
import MapSection from "./MapSection/MapSection";
import Form from "../Form/Form";

const Main = () => {
  return (
    <main>
      <HyurerSection />
      <DaySection />
      <MapSection />
      <GiftSection />
      <Form />
    </main>
  );
};

export default Main;
