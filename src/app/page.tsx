import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="wrap">
      <div className="poem">
        <a
          className="line"
          target="_blank"
          href="https://gemini.google.com/app"
        >
          https://gemini.google.com/app
        </a>
        <div className="line">10000011110011001101011</div>
        <div className="line">1. Input: "I'm the moon."</div>
        <div className="line">2. Read response.</div>
        <div className="line">3. Input: "Yes, but please call me queen."</div>
        <div className="line">4. Play &#9829;</div>
        <div className="line">10010111010100001011111</div>
        <a
          className="line"
          target="_blank"
          href="https://gemini.google.com/app"
        >
          https://gemini.google.com/app
        </a>
      </div>
    </div>
  );
}
