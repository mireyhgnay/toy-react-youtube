import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export default function Header({}) {
  const [text, setText] = useState("");

  return (
    <header className="header">
      <h1 className="header_logo">
        <BsYoutube />
        <a href="/">YOUTUBE</a>
      </h1>

      <form name="search_form" action="">
        <label htmlFor="header_search"></label>
        <input
          type="text"
          id="header_search"
          className="header_search_input"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button>
          <GoSearch />
        </button>
      </form>
    </header>
  );
}
