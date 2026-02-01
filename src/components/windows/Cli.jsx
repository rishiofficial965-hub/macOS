import React, { useState, useRef, useEffect } from "react";
import MacWin from "./MacWin";

const Cli = ({ setWindowState }) => {
  const welcomeMessage = `
╔════════════════════════════════════════╗
║      Welcome to Rishi's Portfolio CLI  ║
╚════════════════════════════════════════╝

Hello! 👋 Explore my portfolio, experience, and projects using terminal commands.

Type 'help' to list all commands.
Try:
  • about
  • skills
  • projects
  • experience
  • contact

Enjoy exploring! 🚀
`;

  const [history, setHistory] = useState(() => [{ type: "output", content: welcomeMessage }]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Full Stack Developer (MERN) with hands-on experience building RESTful APIs, authentication workflows, and scalable applications. Completed a fintech internship and built production-grade projects.",
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Languages: C++, Python, JavaScript (ES6+), SQL
Frontend: React.js, HTML5, CSS3, Responsive Design, GSAP
Backend: Node.js, Express.js, RESTful APIs
Databases: MongoDB, MySQL
Concepts: MERN Stack, MVC, Authentication (JWT), CRUD Ops
Tools: Git, GitHub, Postman, VS Code`,
    },

    education: {
      description: "Show education details",
      usage: "education",
      fn: () => `CV Raman Global University (2023 - Present)
B.Tech in CSE — CGPA: 7.81
Relevant Courses: OOP, DBMS, DSA, OS, CN, ML, Data Mining`,
    },

    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Software Developer Intern @ Kistify (May 2025 - Jul 2025)
- Worked on LAMF platform in Razorpay Rize ecosystem
- Built backend APIs using Node.js + Express
- Integrated partner APIs (Bajaj Financial Services)
- Implemented validation, error handling, CRUD ops
- Collaborated with senior devs, tested APIs via Postman`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Immersive 3D Web Experience (GSAP + Locomotive Scroll)
2. SocialEcho — MERN social network with ML moderation
   (React, Node, Express, MongoDB, Redux)`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: rishiofficial965@gmail.com
Phone: 7859086513
GitHub: github.com/rishiofficial965-hub
LinkedIn: linkedin.com/in/rishi-ranjan`,
    },

    awards: {
      description: "Show awards",
      usage: "awards",
      fn: () => `• Winner — Internal Hackathon: Built real-time track monitoring system
• UI/UX Specialization — Coursera`,
    },

    echo: {
      description: "Echo text back to you",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },

    help: {
      description: "List all available commands",
      usage: "help",
      fn: () => {
        const commandList = Object.keys(commands)
          .map((cmd) => `  ${cmd.padEnd(12)} - ${commands[cmd].description}`)
          .join("\n");
        return `Available commands:\n${commandList}`;
      },
    },

    clear: {
      description: "Clear the terminal",
      usage: "clear",
      fn: () => {
        setHistory([{ type: "output", content: welcomeMessage }]);
        return "";
      },
    },
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (input) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Add input to display history
    setHistory((prev) => [...prev, { type: "input", content: trimmedInput }]);

    // Parse command
    const parts = trimmedInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    if (commands[cmd]) {
      const output = commands[cmd].fn(...args);
      if (output) {
        setHistory((prev) => [...prev, { type: "output", content: output }]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "error", content: `Command '${cmd}' not found! Type 'help' for available commands.` },
      ]);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <MacWin setWindowState={setWindowState} windowKey="cli" title="Terminal">
      <div
        ref={terminalRef}
        className="cli-window h-full bg-black/20 text-green-400 font-mono p-4 overflow-scroll scrollbar-hidden pb-10"
        onClick={() => inputRef.current?.focus()}
        style={{
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-1">
            {entry.type === "input" ? (
              <div className="flex">
                <span className="text-green-500 mr-2">rishi:~$</span>
                <span className="text-white">{entry.content}</span>
              </div>
            ) : entry.type === "error" ? (
              <div className="text-red-400 whitespace-pre-wrap">{entry.content}</div>
            ) : (
              <div className="text-gray-300 whitespace-pre-wrap">{entry.content}</div>
            )}
          </div>
        ))}
        <div className="flex">
          <span className="text-green-500 mr-2">rishi:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white border-none"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </MacWin>
  );
};

export default Cli;
