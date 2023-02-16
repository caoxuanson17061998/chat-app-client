import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ConversationChannelPage } from './pages/ConversationChannelPage';
import { ConversationPage } from './pages/ConversationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="conversations" element={<ConversationPage />}>
          <Route path=":id" element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
