import React, { useState, useRef, useEffect, useCallback } from "react";

const DELAY_MS = 2000;

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: "coach", text: "Coach: Welcome to KPL Manager 👋" },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  const sendMessageWithDelay = useCallback(() => {
    if (!input.trim() || isSending) return;
  
    setIsSending(true);
    setSecondsLeft(DELAY_MS / 1000);
  
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    timeoutRef.current = setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), from: "you", text: input.trim() }]);
      setInput("");
      setIsSending(false);
    }, DELAY_MS);
  }, [input, isSending]);

  const fetchCoachTip = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const advice = data?.slip?.advice || "Stay consistent — champions are made in practice!";
      setMessages(prev => [...prev, { id: Date.now(), from: "coach", text: `Coach: ${advice}` }]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now(), from: "coach", text: "Coach: Network issue — try again." }]);
    }
  };

  return (
    <div className="chat-widget">
      <div className="chat-header">KPL Chat</div>

      <div className="chat-messages" ref={listRef}>
        {messages.map(m => (
          <div
            key={m.id}
            className={`chat-message ${m.from === "you" ? "chat-you" : "chat-coach"}`}
          >
            <span className="chat-text">{m.text}</span>
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <input
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="chat-buttons">
        <button onClick={sendMessageWithDelay} disabled={!input.trim() || isSending}>
          {isSending ? `Sending in ${secondsLeft}s` : "Send Delay"}
        </button>

        <button onClick={fetchCoachTip}>Coach Tip (API)</button>
      </div>
    </div>
  );
};

export default ChatBox;
