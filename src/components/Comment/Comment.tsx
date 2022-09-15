import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/26007230?v=4"
        alt="mendesswashington"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Washington M Santos</strong>
              <time
                title="13 de Setembro as 22:26h"
                dateTime="2022-09-13 22:26:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Washington, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
