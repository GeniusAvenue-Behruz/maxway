import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
function App() {
  return (
    <div className="App">
      <Header />
      <hr className='container mb-[55px] bg-[#979797]'/>
      <Main />
      <Footer />
      <div className='container flex justify-between'>
        <div className='menu-details flex gap-[100px] text-[#003846]'>
          <a href='#!'><img src='logo.svg' alt='logo'/></a>
          <ul className=''>
            <li className='li-header'>Asosiy</li>
            <li>Kompaniya haqida</li>
            <li>Filiallar</li>
            <li>Bolalar uchun</li>
          </ul>
          <ul className=''>
            <li className='li-header'>Qo'shimcha</li>
            <li>menu</li>
            <li>Bonusli karta</li>
            <li>Bu qanday ishlaydi?</li>
          </ul>
        </div>

        <div className='contact-details'>
    <h3 className='font-semibold text-xl mb-7'>Biz bilan aloqa</h3>
    <h1 className='text-2xl font-light mb-3'>(+998 71) 200-54-00</h1>
    <p className='text-[#222124] text-sm'>100011, Toshkent sh. Shayxontohur tumani,
    Zarqaynar ko’chasi, 3B-uy</p>
        </div>
      </div>
      <hr className='container bg-[#979797] my-7 '/>
      <div className='container flex justify-between text-[#003846]'>
        <span className=''> Maxway, 2020</span>
        <div className='flex justify-center items-center gap-6 mr-64 text-[#2221248a]'>
          <a href='#!'><i class="fa-brands fa-facebook"></i></a>
          <a href='#!'><i class="fa-brands fa-telegram"></i></a>
          <a href='#!'><i class="fa-brands fa-facebook"></i></a>
          <a href='#!'><i class="fa-brands fa-square-instagram"></i></a>
          <a href='#!'><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
