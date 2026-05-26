import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const ctx = useAuth();

  return (
    <AuthContext value={{ isLogged }}>
      <Header />
      <Main />
    </AuthContext>
  );
}

function Header() {
  const ctx = useAuth();
  return <header>Header</header>;
}
function Main() {
  const ctx = useAuth();
  return <main>Main</main>;
}

// CUSTOM HOOK (Create own hook)
// REUSABLE LOGIC
// START WITHS use
function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx)
    throw new Error('Auth Context must use within Auth Context Provider');
  return ctx;
}
