import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Dummy from './components/Dummy';
import Admission from './components/Admission';
import Student from './components/Student';
import Course from './components/Course';
import Reports from './components/Reports';
import {Routes,Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
const oytieLogo=new URL("./images/Oytie.png",import.meta.url);
const facebookLogo=new URL("./images/facebook.png",import.meta.url);
const youtubeLogo=new URL("./images/youtube.png",import.meta.url);
const whatsAppLogo=new URL("./images/whatsapp.png",import.meta.url);
const linkedInLogo=new URL("./images/linkedin.png",import.meta.url);
const instagramLogo=new URL("./images/instagram.png",import.meta.url);
const emailLogo=new URL("./images/email.png",import.meta.url);
const callLogo=new URL("./images/call.png",import.meta.url)

function App() {
  return (
  <>
    <Header />
    <ToastContainer></ToastContainer>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dummy' element={<Dummy />} />
      <Route path='/admission' element={<Admission />} />
      <Route path='/student' element={<Student />} />
      <Route path='/course' element={<Course />} />
      <Route path='/reports' element={<Reports />} />
    </Routes>
   {/* <Footer handles1={whatsAppLogo} handles2={instagramLogo} handles3={facebookLogo} handles4={youtubeLogo} handles5={linkedInLogo} contactUs1={callLogo} contactUs2={emailLogo}></Footer> */}
  </>
  );
}

export default App;
