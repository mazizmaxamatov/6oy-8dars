import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [language, setLanguage] = useState('ru'); 

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const text = {
    ru: {
      home: 'Home',
      menu: 'Меню',
      about: 'О нас',
      contact: 'Контакты',
      title: 'Большой гамбургер',
      subtitle: 'говядина',
      description:
        'Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера.',
      price: '14 500',
    },
    uz: {
      home: 'Bosh sahifa',
      menu: 'Menyu',
      about: 'Biz haqimizda',
      contact: 'Kontaktlar',
      title: 'Katta Gamburger',
      subtitle: 'Mol go‘shti',
      description:
        "Yangi, qarsildoq bulka, salat barglari, tuzlangan bodring va piyoz, mayonez va ketchup bilan to‘ldirilgan kichik kotlet - bu gamburgerning klassik portreti.",
      price: '14 500',
    },
  };

  return (
    <header className='bg-header bg-cover max-w-[1440px] mx-auto'>
      <div className='container max-w-[1200px] mx-auto'>
        <nav className='flex justify-between'>
          <div className='nav_left'>
            <div className='logo'>
              <p className='w-[160px] h-[30px] bg-[#4E9F0D] text-[#FFFFFF] pl-[37px] font-Raleway font-normal text-[20px] mt-[26px]'>STREET88</p>
            </div>
          </div>
          <div className='nav_right'>
            <ul className='flex'>
              <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]'>
                <NavLink to="/">{text[language].home}</NavLink>
              </li>
              <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]'>
                <NavLink to="/footer">{text[language].menu}</NavLink>
              </li>
              <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]'>
                <a href="#">{text[language].about}</a>
              </li>
              <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]'>
                <a href="#">{text[language].contact}</a>
              </li>
            </ul>
          </div>
          <div className='til mt-[20px]'>
            <button onClick={() => toggleLanguage('ru')} className={`text-[18px] font-Raleway font-medium pt-[25px] pl-[18px] ${language === 'ru' ? 'text-[#FFFFFF] bg-[#4E9F0D]' : 'text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF]'}`}>Ru</button>
            <button onClick={() => toggleLanguage('uz')} className={`text-[18px] font-Raleway font-medium pt-[25px] pl-[18px] ${language === 'uz' ? 'text-[#FFFFFF] bg-[#4E9F0D]' : 'text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF]'}`}>Uz</button>
          </div>
        </nav>
        <main>
          <h1 className='text-[#4E9F0D] text-[86px] font-black font-Raleway mt-[130px]'>{text[language].title}</h1>
          <span className='text-[#4E9F0D] font-Raleway font-normal text-[36px]'>{text[language].subtitle}</span>
          <p className='max-w-[1169px] text-[#FFFFFF] text-[18px] font-normal font-Raleway mt-[40px]'>
            {text[language].description}
          </p>
          <button className='w-[350px] h-[100px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-thin text-[60px] mt-[65px] mb-[120px]'>
            {text[language].price}
          </button>
        </main>
      </div>
    </header>
  );
}

export default Header;
