import { useState } from "react";
import Container from "./components/Container";
import './index.scss';

import { UserContext } from './context';

export default function App() {
	const [rangeTime, setRangeTime] = useState("daily");

  return (
		<UserContext.Provider value={[rangeTime, setRangeTime]}>
    	<Container />
		</UserContext.Provider>
  );
}
