// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Kurkenov Dauren</h1>
      <section>
        <h2>Опыт работы:</h2>
        <ul>
            <li>2010-2014 ТОО «ҚАЗМҰНАЙГАЗ ӨНІМДЕРІ»</li>
            <li>2016-2017 Банка Астаны</li>
            <li>2017-2019 Alfa-Bank</li>
            <li>2019-2020 BTS Digital</li>
            <li>2020-2021 PineDigital и SOFTCODE.KZ</li>
        </ul>

    </section>

    <section>
        <h2>Образование:</h2>
        <ul>
            <li>2010 <a href="http://uib.kz/">UIB Бакалавр ВТиПО</a> </li>
            <li>2015 <a href="https://www.bcu.ac.uk/">Birmingham City University</a> МБА</li>
        </ul>

    </section>

    <section class="contact-me">
        <h2>Контакты:</h2>
        {<ul>
            <li>
                <a href="https://www.linkedin.com/in/kurkenov/">LinkedIn</a>
                <a href="https://www.medium.com/@kurkenov">Medium</a>
                <a href="https://www.facebook.com/kurkenov">Facebook</a>
                <a href="https://www.instagram.com/kurkenov.kz/">Instagram</a>
                <a href="https://telegram.im/@kurkenov">Telegram</a>
                <a href="https://api.whatsapp.com/send?phone=77029997889">Whatsapp</a>
            </li>

        </ul> }
    </section>


      </header>

    </div>
  );
}

export default App;
