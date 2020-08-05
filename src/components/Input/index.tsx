import React, {InputHTMLAttributes} from 'react';
import './styles.css';

//Forma de nossa interface ter todos os atributos possíveis de um input tradicional
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

// Definindo um componente com as propriedades tipadas
const Input: React.FC<InputProps> = ( {label, name, ...rest} ) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;