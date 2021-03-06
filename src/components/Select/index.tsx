import React, {SelectHTMLAttributes} from 'react';
import './styles.css';

//Forma de nossa interface ter todos os atributos possíveis de um Select tradicional
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

// Definindo um componente com as propriedades tipadas
const Select: React.FC<SelectProps> = ( {label, name, options, ...rest} ) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option =>{
                    //primeiro elemento no map precisa ter uma key
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;