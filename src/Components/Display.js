import React from 'react';
import './Display.css';

function Display () {
  return (
    <section className="App">

      <div >

        < img className="App-image" src="https://greenkitchenstories.com/wp-content/uploads/2016/11/gks_hot_chocolate_3.jpg" alt="cuisine" />

      </div>

      <div className="App-soiréé">

        <h1> Préparez votre Soiréé</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus lacus, vitae sodales turpis. Maecenas finibus, urna id auctor ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus pellentesque nec. Aenean malesuada lacus lacus, quis molestie dolor luctus ac. Sed placerat urna ut metus finibus tristique. Aliquam vehicula risus massa. Ut tempor pretium tincidunt. Morbi malesuada nulla quis velit posuere imperdiet. Nunc laoreet nisl libero, nec fringilla ligula sollicitudin a.

        Maecenas tristique bibendum volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget interdum enim. Fusce non dui sit amet ante pellentesque venenatis. Proin euismod, sem ac luctus bibendum, magna metus dapibus neque, eget venenatis nunc felis eu massa. Curabitur accumsan ex at laoreet molestie. Aenean at justo rhoncus orci blandit tincidunt. Nunc posuere pellentesque euismod. Nullam id magna mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum non dolor ac nisl accumsan pellentesque id et metus.

 </p>

        <form>

          <button id="btn" type="text" placeholder=" Your Name ">Proposez votre plat</button>
        </form>

      </div>

    </section>

  );
}
export default Display;
