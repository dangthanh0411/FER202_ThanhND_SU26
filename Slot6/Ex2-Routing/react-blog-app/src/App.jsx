// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layout Components
import AppNavbar from './components/AppNavbar';

// Import Page Components
import RegistrationForm from './components/RegistrationForm'; 
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Khối Header */}
      <AppNavbar />
      
      {/* Khối định tuyến các trang */}
      <div className="main-content">
        <Routes>
          {/* Mặc định load trang đăng ký đầu tiên */}
          <Route path='/' element={<RegistrationForm />} />
          
          {/* Các trang chính của Blog */}
          <Route path='/home' element={<Home />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/:id' element={<PostDetail />} />
          <Route path='/about' element={<About />} />
          
          {/* Xử lý lỗi 404 cho các URL không tồn tại */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;