import React, { useState } from "react";
import "./styles.css";

var trainSymbolDictionery = {
  "🚂": "Locomotive",
  "🚃": "Railway Car",
  "🚄": "High-Speed Train",
  "🚅": "Bullet Train",
  "🚆": "Train",
  "🚇": "Metro",
  "🚈": "Light Rail",
  "🚉": "Station",
  "🚊": "Tram",
  "🚝": "Monorail",
  "🚞": "Mountain Railway",
  "🚋": "Tram Car"
};
var emojisWeKnow = Object.keys(trainSymbolDictionery);

export default function app() {
  var [inputEmoji, updateInputEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var inputEmoji = trainSymbolDictionery[userInput];
    updateInputEmoji(inputEmoji);
  }

  function emojiClickHandler(emoji) {
    var inputEmoji = trainSymbolDictionery[emoji];
    updateInputEmoji(inputEmoji);
  }

  return (
    <div className="App">
      <h1>Train Symbol Emojis</h1>
      <input onChange={emojiInputHandler} />
      <h2>{inputEmoji}</h2>
      <h2>Symbols we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
