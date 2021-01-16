import './styles/App.css';
import PageComponent from './components/PageComponent';
import SidebarComponent from './components/SidebarComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (
    <div className="App">
      
      <SidebarComponent/>

      <div className="mainContent">
        <HeaderComponent/>
        <PageComponent/>
      </div>
      
    </div>
  );
}
