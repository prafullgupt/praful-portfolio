"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  QUICK_SUGGESTIONS,
  findBestResponse,
  type ChatMessage,
} from "@/lib/chatbot-data";
import {personalInfo} from '@/lib/data'

// ============================================
// AI Chatbot Component for Praful Gupta Portfolio
// Next.js 14+ | TypeScript | Client Component
// ============================================

export default function AIChatbot(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: "bot",
      text: `👋 Hello! I'm **Praful's AI Assistant**. Ask me anything about Praful's portfolio, skills, experience, or projects!`,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSend = useCallback(
    (text: string = inputValue) => {
      if (!text.trim()) return;

      const userMsg: ChatMessage = {
        id: Date.now(),
        type: "user",
        text: text.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      // Simulate AI thinking delay
      const delay = 800 + Math.random() * 600;
      const timer = setTimeout(() => {
        const response = findBestResponse(text);
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          type: "bot",
          text: response,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, delay);

      return () => clearTimeout(timer);
    },
    [inputValue]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  // Render message text with markdown-like formatting + Contact Button
  const renderMessageText = (text: string): React.ReactNode[] => {
    const lines = text.split("\n");
    const nodes: React.ReactNode[] = [];

    lines.forEach((line, i) => {
      // Render Contact Button inline when marker is found
      if (line.trim() === "[CONTACT_BUTTON]") {
        nodes.push(
          <div key={`btn-${i}`} style={{ marginTop: "10px", marginBottom: "4px" }}>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                color: "white",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(245, 158, 11, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 158, 11, 0.3)";
              }}
            >
              <Mail size={14} />
              Go to Contact Page
              <ArrowRight size={14} />
            </a>
          </div>
        );
        return;
      }

      const parts = line.split(/(\*\*.*?\*\*)/g);
      nodes.push(
        <p key={`line-${i}`} className="mb-1 leading-relaxed">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <span key={j} className="font-bold text-amber-400">
                  {part.slice(2, -2)}
                </span>
              );
            }
            return <span key={j}>{part}</span>;
          })}
        </p>
      );
    });

    return nodes;
  };

  return (
    <>
      {/* ============================================
          STYLES (Inline for zero-dependency setup)
          ============================================ */}
      <style jsx global>{`
        .chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }
        .chat-panel {
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 560px;
          max-height: calc(100vh - 100px);
          background: linear-gradient(145deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .chat-header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
          position: relative;
        }
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        }
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }
        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .message-bubble {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          color: #e2e8f0;
          word-wrap: break-word;
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .message-bubble.user {
          align-self: flex-end;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border-bottom-right-radius: 4px;
          color: white;
        }
        .message-bubble.bot {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom-left-radius: 4px;
        }
        .message-time {
          font-size: 10px;
          opacity: 0.5;
          margin-top: 4px;
          text-align: right;
        }
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
        }
        .typing-dot {
          width: 8px;
          height: 8px;
          background: #8b5cf6;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .typing-dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        .suggestions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 16px 8px;
        }
        .suggestion-chip {
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: inherit;
        }
        .suggestion-chip:hover {
          background: rgba(139, 92, 246, 0.3);
          transform: translateY(-1px);
        }
        .chat-input-area {
          padding: 12px 16px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .input-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .chat-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 10px 16px;
          color: #e2e8f0;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
        }
        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .chat-input:focus {
          border-color: #8b5cf6;
          background: rgba(255, 255, 255, 0.08);
        }
        .send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }
        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        .contact-btn {
          width: 100%;
          padding: 10px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border: none;
          color: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
          font-family: inherit;
        }
        .contact-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
        }
        .floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
          position: relative;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.6);
          }
        }
        .floating-btn:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .floating-btn:active {
          transform: scale(0.95);
        }
        .badge-online {
          width: 10px;
          height: 10px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid white;
          position: absolute;
          bottom: 2px;
          right: 2px;
        }
        .status-text {
          font-size: 12px;
          opacity: 0.8;
          color: white;
        }
        .header-title {
          font-weight: 700;
          font-size: 15px;
          color: white;
        }
        .close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s;
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(90deg);
        }
        .avatar-icon-wrapper {
          min-width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .avatar-icon-wrapper.user {
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 480px) {
          .chat-panel {
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
            bottom: 0;
            right: 0;
            position: fixed;
          }
          .chatbot-container {
            bottom: 0;
            right: 0;
          }
        }
      `}</style>

      <div className="chatbot-container">
        {/* Chat Panel */}
        {isOpen && (
          <div className="chat-panel">
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <Sparkles size={20} color="white" />
                  <span className="badge-online"></span>
                </div>
                <div>
                  <div className="header-title">Praful AI Assistant</div>
                  <div className="status-text">Online • Portfolio Expert</div>
                </div>
              </div>
              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message-bubble ${msg.type}`}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    {msg.type === "bot" && (
                      <div className="avatar-icon-wrapper">
                        <Bot size={14} color="white" />
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      {renderMessageText(msg.text)}
                      <div className="message-time">{msg.time}</div>
                    </div>
                    {msg.type === "user" && (
                      <div className="avatar-icon-wrapper user">
                        <User size={14} color="white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length < 3 && !isTyping && (
              <div className="suggestions-row">
                {QUICK_SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    className="suggestion-chip"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="chat-input-area">
              <div className="input-row">
                <input
                  ref={inputRef}
                  className="chat-input"
                  type="text"
                  placeholder="Ask about Praful's portfolio..."
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  aria-label="Chat input"
                />
                <button
                  className="send-btn"
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Floating Button */}
        {!isOpen && (
          <button
            className="floating-btn"
            onClick={() => setIsOpen(true)}
            title="Chat with AI Assistant"
            aria-label="Open chat"
          >
            <MessageCircle size={28} />
          </button>
        )}
      </div>
    </>
  );
}