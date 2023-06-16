import style from './BuscadorLinguagem.module.scss';
import {FaSearch} from 'react-icons/fa';

export default function  BuscadorLinguagem(){
    return (
        <div className={style.buscadorLinguagem}>
            <input type="text" placeholder="Buscar"></input>
            <FaSearch/>
        </div>
    )
}