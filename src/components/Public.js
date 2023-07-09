import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Emilie Z Software!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Bake City, Emilie Z Software provides a
          trained staff ready to meet your tech software needs.
        </p>
        <address className="public__addr">
          Emilie Z Software
          <br />
          221 Bake Drive
          <br />
          Bake City, CA 12345
          <br />
          <a href="tel:+11234567890">(123) 456-7890</a>
        </address>
        <br />
        <p>Owner: Emilie Zhang</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
