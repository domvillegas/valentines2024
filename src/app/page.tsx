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
        <div className="line">Gemini: "I'm the moon."</div>
        <div className="line">Read response.</div>
        <div className="line">Reply: "Yes, but please call me queen."</div>
        <div className="line">Play &#9829;</div>
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
