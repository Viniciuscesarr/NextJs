import { GetServerSideProps } from "next";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Textarea from "../../components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

import { getSession } from "next-auth/react";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>
            <form>
              <Textarea placeholder="Digite qual sua tarefa" value={input} onChange={ (e:ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value) }/>
              <div className={styles.checkboxArea}>
                <input type="checkbox" className={styles.checkbox} />
                <label>Deixar tarefa pública?</label>
              </div>
              <button type="submit" className={styles.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>

          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PUBLICO</label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color="#3183ff" />
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>My first task</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color="#ea3140" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
