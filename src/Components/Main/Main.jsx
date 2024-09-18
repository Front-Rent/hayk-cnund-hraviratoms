import DaySection from "./DaySection/DaySection";
import HyurerSection from "./HyurerSection/HyurerSection";
import MapSection from "./MapSection/MapSection";
import Form from "../Form/Form";

import "./Main.scss";

const Main = () => {
  return (
    <main>
      <HyurerSection />
      <DaySection />
      <MapSection />
      <Form />
    </main>
  );
};

export default Main;
