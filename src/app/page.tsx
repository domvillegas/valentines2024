import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="wrap">
      <div className="poem">
        <div className="line line1">her red hair</div>
        <div className="line line2">glints</div>
        <div className="threeFourGroup">
          <div className="line line3">like raindrops</div>
          <div className="line line4">
            <span className="i">i</span>
            <span className="n">n</span> <span className="f">F</span>
            <span className="a">a</span>
            <span className="l">l</span>
            <span className="ll">l</span>
          </div>
        </div>
      </div>
    </div>
  );
}
