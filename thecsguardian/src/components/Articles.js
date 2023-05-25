import React from 'react';
import Menu from './Menu.js';
import '../style/Articles.css';
import { FaThumbsUp } from 'react-icons/fa'; // for the like button

const Articles = () => {
  const posts1 = [
    { title: 'Article 1', img: 'url_to_image1', likes: 0 },
    { title: 'Article 2', img: 'url_to_image2', likes: 0 },
    { title: 'Article 3', img: 'url_to_image3', likes: 0 },
  ];
  const posts2 = [
    { title: 'Article 4', img: 'url_to_image4', likes: 0 },
    { title: 'Article 5', img: 'url_to_image5', likes: 0 },
    { title: 'Article 6', img: 'url_to_image6', likes: 0 },
  ];
  const posts3 = [
    { title: 'Article 7', img: 'url_to_image7', likes: 0 },
    { title: 'Article 8', img: 'url_to_image8', likes: 0 },
    { title: 'Article 9', img: 'url_to_image9', likes: 0 },
  ];
  

  return (
    <div className="tv-parent">
      <Menu />
      <div className="tv-content">
      <h1>RECENT NEWS</h1> 
        <section>
          <div className="articles">
            {posts1.map(post => (
              <div className="card" key={post.title}>
                <img src={post.img} alt={post.title} className="card-img" />
                <div className="card-bottom">
                  <h2 className="card-title">{post.title}</h2>
                  <div className="like-section">
                    <FaThumbsUp className="like-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="articles">
            {posts2.map(post => (
              <div className="card" key={post.title}>
                <img src={post.img} alt={post.title} className="card-img" />
                <div className="card-bottom">
                  <h2 className="card-title">{post.title}</h2>
                  <div className="like-section">
                    <FaThumbsUp className="like-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="articles">
            {posts3.map(post => (
              <div className="card" key={post.title}>
                <img src={post.img} alt={post.title} className="card-img" />
                <div className="card-bottom">
                  <h2 className="card-title">{post.title}</h2>
                  <div className="like-section">
                    <FaThumbsUp className="like-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Articles;