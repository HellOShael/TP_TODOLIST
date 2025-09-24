import styles from "./footer.module.css";

export const Footer = ({ totalDone }) => {
  return (
    <footer>
      <code className={styles.footer}>
        Le gestionnaire de tâches vous a permis de traiter {totalDone}{" "}
        {totalDone === 1 ? "tâche" : "tâches"} depuis le début de son utilisation.
      </code>
    </footer>
  );
};
