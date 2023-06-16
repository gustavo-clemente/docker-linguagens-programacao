import { Linguagem } from 'types/Linguagem';
import styles from './TabelaLinguagens.module.scss';
import { FaPen, FaTrashAlt } from 'react-icons/fa';


interface Props{
    linguagens: Linguagem[]
}
export default function TabelaLinguagens({linguagens} : Props) {
    
    return (
        <table className={styles.tabelaLinguagens}>
            <thead className={styles.tabelaLinguagens__header}>
                <tr className={styles.tabelaLinguagens__linha}>
                    <th className={styles.tabelaLinguagens__linha__item}>ID</th>
                    <th className={styles.tabelaLinguagens__linha__item}>Nome</th>
                    <th className={styles.tabelaLinguagens__linha__item}>Data Criação</th>
                    <th className={styles.tabelaLinguagens__linha__item}>Ações</th>
                </tr>
            </thead>
            <tbody className={styles.tabelaLinguagens__body}>
                {linguagens.map(linguagem => (
                    <tr key={linguagem.id} className={styles.tabelaLinguagens__linha}>
                        <td className={styles.tabelaLinguagens__linha__item}>{linguagem.id}</td>
                        <td className={styles.tabelaLinguagens__linha__item}>{linguagem.nome}</td>
                        <td className={styles.tabelaLinguagens__linha__item}>{linguagem.data_criacao.toLocaleDateString()}</td>
                        <td className={styles.tabelaLinguagens__linha__item}>
                            <div className={styles.tabelaLinguagens__linha__item__acoes}>
                                <FaPen className={styles.tabelaLinguagens__linha__item__acoes__icone}></FaPen>
                                <FaTrashAlt className={styles.tabelaLinguagens__linha__item__acoes__icone}></FaTrashAlt>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}