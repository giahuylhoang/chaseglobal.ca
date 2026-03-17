"use client";

import { useState, useEffect, useRef, useCallback, FormEvent } from "react";
import Image from "next/image";

interface Message {
  role: "bot" | "user";
  text: string;
}

const WELCOME_MSG =
  "Hi there! 👋 How can I help you today? I can assist with education and immigration inquiries.";

const PLACEHOLDER_REPLIES = [
  "Thanks for reaching out! Our team will follow up with you shortly. In the meantime, feel free to explore our Education or Immigration pages.",
  "That's a great question! For personalized guidance, I'd recommend booking a free consultation through our Contact page.",
  "I appreciate your interest! We offer services across 14+ countries for education and full Canadian immigration support. How can I help further?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: WELCOME_MSG },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [nudgeVisible, setNudgeVisible] = useState(false);
  const [pulse, setPulse] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyIdx = useRef(0);

  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem("chatbot-opened");

    const autoOpenTimer = setTimeout(() => {
      if (!alreadyOpened) {
        setIsOpen(true);
        setPulse(true);
        sessionStorage.setItem("chatbot-opened", "1");
      } else {
        setNudgeVisible(true);
        setPulse(true);
      }
    }, 2500);

    const hideNudge = setTimeout(() => setNudgeVisible(false), 8000);
    const stopPulse = setTimeout(() => setPulse(false), 9000);

    return () => {
      clearTimeout(autoOpenTimer);
      clearTimeout(hideNudge);
      clearTimeout(stopPulse);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendPlaceholderReply = useCallback(() => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: PLACEHOLDER_REPLIES[replyIdx.current % PLACEHOLDER_REPLIES.length] },
      ]);
      replyIdx.current += 1;
    }, 1500);
  }, []);

  const handleSend = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();
      const trimmed = input.trim();
      if (!trimmed || typing) return;

      setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
      setInput("");
      sendPlaceholderReply();
    },
    [input, typing, sendPlaceholderReply],
  );

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setNudgeVisible(false);
  }, []);

  return (
    <>
      {/* Nudge tooltip */}
      <div className={`chatbot-nudge${nudgeVisible && !isOpen ? " visible" : ""}`}>
        Need help? Chat with us!
        <button
          className="chatbot-nudge-close"
          onClick={() => setNudgeVisible(false)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>

      {/* Chat panel */}
      <div className={`chatbot-panel${isOpen ? " open" : ""}`}>
        <div className="chatbot-header">
          <Image
            src="/assets/logo-chase-global.png"
            alt="Chase Global"
            width={38}
            height={38}
            className="chatbot-header-avatar"
          />
          <div className="chatbot-header-info">
            <p className="chatbot-header-title">Chase Global Assistant</p>
            <p className="chatbot-header-status">
              <span className="chatbot-status-dot" /> Online
            </p>
          </div>
          <button className="chatbot-close" onClick={toggleOpen} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-msg ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          {typing && (
            <div className="chatbot-typing">
              <span className="chatbot-typing-dot" />
              <span className="chatbot-typing-dot" />
              <span className="chatbot-typing-dot" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-bar" onSubmit={handleSend}>
          <input
            className="chatbot-input"
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="chatbot-send"
            type="submit"
            disabled={!input.trim() || typing}
            aria-label="Send message"
          >
            <i className="fas fa-paper-plane" />
          </button>
        </form>

        <div className="chatbot-footer-tag">Powered by Chase Global AI</div>
      </div>

      {/* Floating bubble */}
      <button
        className={`chatbot-bubble${isOpen ? " open" : ""}${pulse ? " pulse" : ""}`}
        onClick={toggleOpen}
        aria-label="Open chat"
      >
        <span className="chatbot-bubble-icon">
          {isOpen ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-comments" />
          )}
        </span>
      </button>
    </>
  );
}
