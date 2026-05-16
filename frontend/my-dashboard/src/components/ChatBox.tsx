// frontend/my-dashboard/src/components/ChatBox.tsx
import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

export const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when a new message appears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMsg: Message = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMsg.text }),
      });
      const data = await res.json();
      const reply: Message = { id: Date.now() + 1, role: 'assistant', text: data.reply };
      setMessages(prev => [...prev, reply]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        id: Date.now() + 2,
        role: 'assistant',
        text: '⚠️ Error communicating with AI.',
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`chat-message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Ask something..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </div>
  );
};
