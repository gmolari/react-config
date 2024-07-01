import { useLocation } from "react-router-dom";
import Body from "./Body/Body"

function App() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("_token");
  
  return <Body token={token}/>
}

export default App

