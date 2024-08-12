import { GetServerSideProps } from "next"
import styles from "./styles.module.css"
import Head from "next/head"

import { getSession } from 'next-auth/react'

export default  function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel</title>
            </Head>
            <h1>Página meu painel</h1>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })
    return{
        props: {},
    }
}