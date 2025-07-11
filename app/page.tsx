import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AIEngineerImage from "@/public/ai-engineer.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={AIEngineerImage} alt="AI Engineer" priority />
      <ol>
        <li>
          <Link href="/stock-predictions">Stock Predictions</Link>
        </li>
        <li>More to come...</li>
      </ol>
    </div>
  );
}
