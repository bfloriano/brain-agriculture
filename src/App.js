import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { mock } from './mock.ts'

import './styles.css'
const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  let newArr = []
  const totalArea = mock.produtores.map((item) => {
    newArr.push(item.totalArea)
  })
  const areaTotal = newArr.reduce((total, currentElement) => total + currentElement)
  
  return (
    <>
      <header className="header">
        <h1>Brain Agriculture</h1>
      </header>
      <div className='body'>
        <div className='rightSide'> 
          <div className='graphicArea'>
            <div className='graphic'>grafico 1</div>
            <div className='graphic'>grafico 2</div>
            <div className='graphic'>grafico 3</div>
          </div>
        </div>
        <div className='leftSide'>  
          <div>
            <h3>Quantidade Total de Fazendas: {mock.produtores.length}</h3>
            <h3>Total em área cadastrada: {areaTotal} ha</h3>
            <h2>Produtores Rurais:</h2>
          </div>        
          <div>
            {mock.produtores.map((item) => {
              return  <div className='list'>
                        <p>{item.name}</p>
                        <div style={{width: '60px', display: 'flex', justifyContent: 'space-between'}}>
                          <button onClick={() => setOpenModal(true)}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20px" height="20px">
                              <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 
                                L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 
                                C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 
                                23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 
                                8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 
                                23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 
                                22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 
                                25.0625 L 6.28125 25.71875 Z"/>
                            </svg>
                          </button>  
                          <button onClick={console.log('call API DELETE method with item id')}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20px" height="20px">
                              <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 
                                13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 
                                13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 
                                8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 
                                Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
            })}
          </div>
        </div>
        <Modal
            isOpen={openModal}
            style={modalStyle}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={() => setOpenModal(false)}
            // contentLabel="Example Modal"
          >
            <h2>Cadastro de Produtor Rural</h2>
            <form className='form'>
              <input placeholder='CPF ou CNPJ' />
              <input placeholder='Nome do produtor' />
              <input placeholder='Nome da Fazenda' />
              <input placeholder='Cidade' />
              <input placeholder='Estado' />
              <input placeholder='Área total da fazenda em hectares' />
              <input placeholder='Área agricultável em hectares' />
              <input placeholder='Área de vegetação em hectares' />
              <input placeholder='Culturas plantadas' />
              <button onClick={() => console.log('salvar')}>Salvar</button>
              <button onClick={() => setOpenModal(false)}>Cancelar</button>
            </form>
          </Modal>
      </div>
      <footer>
        <button onClick={() => setOpenModal(true)} className='button'>Novo Cadastro</button>
      </footer>
    </>
  );
}

export default App;
