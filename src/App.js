
import './App.css';

function App() {
  return (
    <div className="App">
       <body>
    <div class="back">
    <nav>
      <div class="nav__logo"><a href="#">Travel</a></div>
      <ul class="nav__links">
        <li class="link">Home</li>
        <li class="link">Features</li>
        <li class="link">About Us</li>
        <li class="link">Contact Us</li>
      </ul>
      <div class="search__box">
        <input type="text" placeholder="Search"/>
        <i class="ri-search-line"></i>
      </div>
    </nav>

    <div class="container">
      <div class="container__left">
        <div class="content">
          <h1>DISCOVERING<br/>THE WORLD.</h1>
          <p>
            Through travel, individuals have the opportunity to immerse
            themselves in different cultures, try new foods, and witness the
            beauty of nature. Exploring new places can also challenge one's
            comfort zone and help to develop important life skills.
          </p>
          <div class="btns">
            <button class="read__more">Read More</button>
            <button class="our__blogs">Our Blogs</button>
          </div>
          <div class="chevrons">
            <span class="chev__left">
              <i class="ri-arrow-left-s-line"></i>
            </span>
            <span class="chev__right">
              <i class="ri-arrow-right-s-line"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="container__right">
        <form>
          <h4>Where you want to go?</h4>
          <div class="form__group">
            <label for="destination">Destination</label>
            <input type="text" name="destination" id="destination" placeholder="Enter destination" />
          </div>
          <div class="form__group">
            <label for="date">Date</label>
            <input type="text" name="date" id="date" placeholder="dd/mm/yyyy" />
          </div>
          <button type="submit">Check travel package</button>
        </form>
      </div>
      <div class="bottom__tracker">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</body><div class="bottom__tracker">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;