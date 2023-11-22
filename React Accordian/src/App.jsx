import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Do I need to rewrite all my class components?",
    text: "No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. We recommend trying Hooks in new code.",
  },
  {
    title: "What can I do with Hooks that I couldn’t with classes?",
    text: "Hooks offer a powerful and expressive new way to reuse functionality between components. “Building Your Own Hooks” provides a glimpse of what’s possible. This article by a React core team member dives deeper into the new capabilities unlocked by Hooks.",
  },
  {
    title: "How much of my React knowledge stays relevant?",
    text: "Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don’t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant. Hooks do have a learning curve of their own. If there’s something missing in this documentation, raise an issue and we’ll try to help.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
