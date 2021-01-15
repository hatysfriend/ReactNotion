import './styles/App.css';
import PageComponent from './components/PageComponent';
import SidebarComponent from './components/SidebarComponent';

export default function App() {
  return (
    <div className="App">
      <SidebarComponent/>
      <PageComponent/>
    </div>
  );
}
