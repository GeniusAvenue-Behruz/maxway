import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
function App() {
  return (
    <div className="App">
      <Header />
      <hr className='container mb-[55px] bg-[#979797]' />
      <Main />
      <Footer />
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0">
    <div className="menu-details flex items-center md:items-start  flex-col md:flex-row gap-10 md:gap-[100px] text-inherit">
        <a href='#!'><img src='logo.svg' alt='logo' className="w-24 md:w-auto" /></a>
        <div className="flex flex-col md:flex-row gap-6">
            <ul className=''>
                <li className='li-header font-bold mb-2'>Asosiy</li>
                <li className="mb-2">Kompaniya haqida</li>
                <li className="mb-2">Filiallar</li>
                <li className="mb-2">Bolalar uchun</li>
            </ul>
            <ul className=''>
                <li className='li-header font-bold mb-2'>Qo'shimcha</li>
                <li className="mb-2">Menu</li>
                <li className="mb-2">Bonusli karta</li>
                <li className="mb-2">Bu qanday ishlaydi?</li>
            </ul>
        </div>
    </div>

    <div className='contact-details text-center md:text-left'>
        <h3 className='font-semibold text-xl mb-4'>Biz bilan aloqa</h3>
        <h1 className='text-2xl font-light mb-3'>(+998 71) 200-54-00</h1>
        <p className='text-[#222124] text-sm'>
            100011, Toshkent sh. Shayxontohur tumani,<br />
            Zarqaynar ko’chasi, 3B-uy
        </p>
    </div>
</div>

<hr className='container bg-[#979797] my-7' />

<div className='container mx-auto flex flex-col md:flex-row justify-between items-center text-inherit'>
    <span className='mb-4 md:mb-0'>Maxway, 2020</span>
    <div className='flex justify-center items-center gap-4'>
        <a href='#!'><i class="fa-brands fa-facebook text-xl"></i></a>
        <a href='#!'><i class="fa-brands fa-telegram text-xl"></i></a>
        <a href='#!'><i class="fa-brands fa-facebook text-xl"></i></a>
        <a href='#!'><i class="fa-brands fa-square-instagram text-xl"></i></a>
        <a href='#!'><i class="fa-brands fa-tiktok text-xl"></i></a>
    </div>
</div>

    </div>
  );
}

export default App;
