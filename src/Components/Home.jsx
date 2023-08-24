import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import  UserProfile from "./UserGreeting";

export const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Get the history object

  const handleButtonClick = () => {
    navigate('/books'); // Redirect to the home page
  };

  return (
    <div className="Home">
      <div className="book-previews-container">
        <div className="book-preview">
          <div className="book-details">
            <h1 className="book-title"><UserProfile /> </h1>
            <h3 className="book-author">Greetings from Online book Store:</h3>
            <p className="book-description">"Welcome to our online book store! Explore our vast collection of books and embark on a journey through captivating stories and knowledge-filled pages. Whether you're a seasoned reader or just starting your literary adventure, we have something for everyone. Happy Reading!"</p>
            <Button variant="contained" style={{ ...theme.buttons.primary }} onClick={handleButtonClick}>
              Happy Shopping
            </Button>
          </div>
          {/*<div className="book-image">
            <img src="interstellar.jpg" alt="img" />
          </div> */}
        </div>

        <div className="book-preview">
          <div className="book-details">
            <h1 className="book-title">Interstellar: </h1>
            <h3 className="book-author">By Kip Throne</h3>
            <p className="book-description">THE END OF EARTH WILL NOT BE THE END OF USFrom acclaimed filmmaker Christopher Nolan (The Dark Knight Triology, Inception),INTERSTELLAR and all related characters and elements are trademarks of and © Warner Bros. Entertainment Inc. </p>
            <Button variant="contained" style={{ ...theme.buttons.primary }} onClick={handleButtonClick}>
              Shop Now
            </Button>
          </div>
          <div className="book-image">
            <img src="interstellar.jpg" alt="img" />
          </div>
        </div>

        <div className="book-preview">
          <div className="book-details">
            <h1 className="book-title">Harry Potter and the Half-Blood Prince </h1>
            <h3 className="book-author">J. K. Rowling</h3>
            <p className="book-description">Rowling, J. K. In this book, Harry Potter learns a lot about Lord Voldemort's past, 
          and Harry Potter prepares for the final battle against his nemesis with the help of Headmaster Dumbledore. But in that time, 
          Voldemort returns to power, and makes a plan to destroy Harry.</p>
            <Button variant="contained" style={{ ...theme.buttons.primary }} onClick={handleButtonClick}>
              Shop Now
            </Button>
          </div>
          <div className="book-image">
             <img src="book-image.jpg" alt="img" />
          </div>
        </div>
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
          </footer>
      </div>
    </div>
  );
};
