//import '/Users/jazzgobbo/Documents/GitHub/NorthwesternTV/src/App.css';
import React from 'react';
import Menu from './Menu.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Media.css';


// figure out how to dynamically embed youtube videos
const Media = () => {
  return (
    <div className="tv-parent">
        <Menu />
      <div className="tv-content">
        <section>
          <h1>TECHNOLOGY NAME 1</h1> 
          <div className="media">
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/SUwTAkHgwRI" title="B.F.R." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/kbtMW1oZkjU" title="Dove" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/z0wIMrD73Fk" title="Clown World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/CXrvBxQ7oSA" title="Jeremy L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section>
          <h1>TECHNOLOGY NAME 2</h1> 
          <div className="media">
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/GeUH7cnNGg8" title="Niteskool Sessions: Moyana Olivia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/-bIoDdlRsj4" title="Fingers Crossed - Haley Davis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/cJf1LM6VPw8" title="Niteskool Sessions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/1OOkgStzgcc" title="Welcomefest: Haley Davis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section> 
        <section>
          <h1>TECHNOLOGY NAME 3</h1> 
          <div className="media">
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/SUwTAkHgwRI" title="B.F.R." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/kbtMW1oZkjU" title="Dove" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/z0wIMrD73Fk" title="Clown World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/CXrvBxQ7oSA" title="Jeremy L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section> 
        <section>
          <h1>TECHNOLOGY NAME 4</h1> 
          <div className="media">
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/SUwTAkHgwRI" title="B.F.R." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/kbtMW1oZkjU" title="Dove" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/z0wIMrD73Fk" title="Clown World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="25%" height="20%" src="https://www.youtube.com/embed/CXrvBxQ7oSA" title="Jeremy L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section> 
      </div>
    </div>
  );
}

export default Media;