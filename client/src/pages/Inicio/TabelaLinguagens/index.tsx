import styles from './TabelaLinguagens.module.scss';

export default function TabelaLinguagens() {
    return (
        <table className={styles.tabelaLinguagens}>
            <thead className={styles.tabelaLinguagens__header}>
                <tr className={styles.tabelaLinguagens__header__linha}>
                    <th className={styles.tabelaLinguagens__header__item}>ID</th>
                    <th className={styles.tabelaLinguagens__header__item}>Nome</th>
                    <th className={styles.tabelaLinguagens__header__item}>Data Criação</th>
                    <th className={styles.tabelaLinguagens__header__item}>Ações</th>
                </tr>
            </thead>
        </table>
    )
}