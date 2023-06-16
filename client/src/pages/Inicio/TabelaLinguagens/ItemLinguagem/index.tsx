import { Linguagem } from "types/Linguagem";
import styles from "./ItemLinguagem.module.scss";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export default function ItemLinguagem(linguagem: Linguagem) {
    const { id, nome, data_criacao } = linguagem
    return (
        <tr className={styles.ItemLinguagem}>
            <td className={styles.ItemLinguagem__coluna}>{id}</td>
            <td className={styles.ItemLinguagem__coluna}>{nome}</td>
            <td className={styles.ItemLinguagem__coluna}>{data_criacao.toLocaleDateString()}</td>
            <td className={styles.ItemLinguagem__coluna}>
                <div className={styles.ItemLinguagem__coluna__acoes}>
                    <FaPen></FaPen>
                    <FaTrashAlt></FaTrashAlt>
                </div>
            </td>
        </tr>
    )
}