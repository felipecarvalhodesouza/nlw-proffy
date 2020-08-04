import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/36648569?s=460&u=d032d8d59d2e13ff16e5b4f5bed54fc4dd6dd3de&v=4" alt="Felipe Carvalho"/>
                <div>
                    <strong>Felipe Carvalho de Souza</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entustiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado pro explodir coisas em laboratório e por mudar a vida das pessoas através de experiências [...]
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article> 
    )
}

export default TeacherItem;