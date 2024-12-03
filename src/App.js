import AdminRouter from './admin/AdminRouter';
import './App.css';
import UserRouter from './user/UserRouter';

function App() {
  return (
    <div className="App">
      <UserRouter/>
      <AdminRouter/>
    </div>
  );
}

export default App;