import Link from "next/link";
import App from "../components/App";
import { Typography } from "@mui/material";
import styles from "../styles/Error.module.css";

export default function Custom404() {
  return (
    <div>
      <App>
        <div className={styles.container}>
          <Typography variant="h3" className={styles.header}>
            Oops, that's a 404 🙈.
          </Typography>
          <Typography variant="h4">
            <Link href="/home" className={styles.link}>
              Go back to the home page
            </Link>
          </Typography>
        </div>
      </App>
    </div>
  );
}
