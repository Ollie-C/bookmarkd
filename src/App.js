//Context
import { ContextWrapper } from "./contexts/Context";
//Components
import Form from "./components/Form/Form";
import Bookmarks from "./components/Bookmarks/Bookmarks";
//Styles
import "./styles/main.scss";
//Logo
import logo from "./assets/logo/bookmarkd-logo.jpg";

function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="bookmarkd logo" className="logo" />
        </div>
      </header>
      <ContextWrapper>
        <main>
          <Form />
          <Bookmarks />
        </main>
      </ContextWrapper>
    </>
  );
}

export default App;
