import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';

//Forma de nossa interface ter todos os atributos possíveis de um Textarea tradicional
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

// Definindo um componente com as propriedades tipadas
const Textarea: React.FC<TextareaProps> = ( {label, name, ...rest} ) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;