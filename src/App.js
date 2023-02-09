//Context
import { ContextWrapper } from "./contexts/Context";
//Components
import Form from "./components/Form/Form";
import Bookmarks from "./components/Bookmarks/Bookmarks";
//Styles
import "./styles/main.scss";

function App() {
  return (
    <>
      <header>
        <h1>bookmark.d</h1>
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
