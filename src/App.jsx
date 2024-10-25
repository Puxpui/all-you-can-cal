import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './conponents/Layout';
import WaterIntake from './conponents/page/waterintake';
import DailyPay from './conponents/page/dailypay';
import Scholarship from './conponents/page/scholarship';
import AreaCal from './conponents/page/areacal';
import About from './conponents/page/About';
import Contact from './conponents/page/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <div className="font-ctfont text-lg">
              <div className='flex justify-center gap-8'>
                <Link to="/waterintake" className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-[20%]'>
                  คำนวนปริมาณน้ำที่ควรดื่ม
                </Link>
                <Link to="/dailypay" className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-[20%]'>
                  คำนวนค่าใช้จ่ายประจำวัน
                </Link>
                <Link to="/areacal" className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-[20%]'>
                  คำนวนพื้นที่
                </Link>
                <Link to="/scholarship" className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-[20%]'>
                  คำนวนทุนการศึกษา
                </Link>
              </div>
              <footer className='select-none footer footer-center p-0  bg-base-300 text-base-content mt-[19%]'>
                <p>Copyright © 2024 - All right reserved by Puxpui</p>
              </footer>
            </div>
          </Layout>
        } />
        <Route path="/waterintake" element={<WaterIntake />} />
        <Route path="/dailypay" element={<DailyPay />} />
        <Route path="/areacal" element={<AreaCal />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
