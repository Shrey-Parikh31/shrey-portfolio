import { useRef, useState } from "react";
import { scoreTyping, typingPhrase } from "./typing";
import "./TypingBreak.css";

function TypingRound() {
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState(null);
  const startedAt = useRef(null);
  const input = useRef(null);
  const reset = () => { setTyped(""); setResult(null); startedAt.current = null; input.current.focus(); };
  return (
    <div className="typing-round">
      <p id="typing-help">Type the line below. Backspace is fine. Your final text determines accuracy.</p>
      <p className="typing-target" id="typing-target"><span className="sr-only">{typingPhrase}</span>
        {[...typingPhrase].map((character, index) => <span key={index} aria-hidden="true" className={`${index < typed.length ? typed[index] === character ? "correct" : "incorrect" : ""} ${index === typed.length && !result ? "current" : ""}`}>{character}</span>)}
      </p>
      <label className="sr-only" htmlFor="typing-input">Type the practice sentence</label>
      <textarea ref={input} id="typing-input" rows={2} value={typed} maxLength={typingPhrase.length} readOnly={Boolean(result)}
        aria-describedby="typing-help typing-target" placeholder="Start typing here..." spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off"
        onChange={(event) => {
          if (result) return;
          const value = event.target.value;
          if (startedAt.current === null && value.length) startedAt.current = performance.now();
          setTyped(value);
          if (value.length === typingPhrase.length) setResult(scoreTyping(typingPhrase, value, performance.now() - startedAt.current));
        }} />
      <div className="typing-controls">
        <p role="status">{result ? `${result.wpm === null ? "Complete" : `${result.wpm} wpm`} · ${result.accuracy}% final accuracy` : `${typed.length} / ${typingPhrase.length} characters`}</p>
        <button className="btn btn-ghost" onClick={reset}>Start again</button>
      </div>
      <p className="typing-privacy">Just for fun. Nothing is sent or saved.</p>
    </div>
  );
}

export default function TypingBreak() {
  const [open, setOpen] = useState(false);
  return (
    <section id="play" className="section typing-break" tabIndex={-1} aria-label="Optional typing break">
      <details onToggle={(event) => setOpen(event.currentTarget.open)}>
        <summary>Take a typing break <span>A small nod to Monkeytype.</span></summary>
        {open && <TypingRound />}
      </details>
    </section>
  );
}
