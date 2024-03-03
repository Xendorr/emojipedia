import React, { useEffect, useState } from "react";
import EmojiCard from "./EmojiCard";
import "../styles/App.css";

function App() {
  const [emojis, setEmojis] = useState([]);
  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const result = await fetch("http://localhost:3001/emojis");
        if (!result.ok) {
          throw new Error("Failed to fetch");
        } else {
          const data = await result.json();
          setEmojis(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmojis();
  }, []);

  return (
    <>
      <header>
        <h1 className="header-title">
          <span>emojipedia</span>
        </h1>
      </header>
      <main>
        <dl className="dictionary">
          {emojis.map((emoji) => (
            <EmojiCard
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              description={emoji.description}
            />
          ))}
        </dl>
      </main>
      <footer>
        <p>emojipedia</p>
        <h1 className="footer-title">
          Made with ❤ by{" "}
          <a href="https://www.linkedin.com/in/marius-bobitiu">
            Marius Bobitiu
          </a>
        </h1>
      </footer>
    </>
  );
}

export default App;
