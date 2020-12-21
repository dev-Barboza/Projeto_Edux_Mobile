import React, {useState} from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from  'react-router-dom';


import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container , Form , Button } from 'react-bootstrap';
import Logo2 from  '../../assets/img/logo_2.png';





const Cadastro = () => {
    const history = useHistory();
    const firebase = useFirebaseApp();

   
    const [nome, setNome] = useState('');

    const [cadastro , setCadastro] = useState({});

    useEffect(() =>{
        listarCadastros();
    },[])


    const listarCadastros = () => {
        try {
            db.collection('cadastros')
                .get()
                .then( (result) => {
                    console.log(result.docs);
                    const data = result.docs.map(doc =>{
                        return{
                            
                            nome : doc.data().nome, 
                            
                        }

                        
                    })

                    setCadastro(data); 
                })
                .catch(error =>{
                    console.error(error);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
      <div className="completo">
      <Menu />
            <Container className="first">
            <Container className='second'>
                <Container className= "Texto">
                    <div class="div">

                    <h1><img src={Logo2} alt="Logo do Edux"/></h1>
                    <h2>Faça Parte Voce também! <br/>Entre agora para usufruir <br/>todos os beneficios disponiveis </h2>
                   

                    </div>
                </Container>  

                <Container className='second2'>
                 <Form className='uno' onSubmit={ event => cadastrar(event) }>
                    <div className='text-center'>
                       <img src="" alt=""/>
                    </div>
                    <br/>
                    
                    <hr/>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="name" value={nome} onChange={ event => setNome(event.target.value)} placeholder="Informe seu Nome" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={ event => setEmail(event.target.value)} placeholder="Informe o email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    
                 </Form>

                 <tbody>
                    {
                            atividades.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>

                                        <td>
                                            <Button variant="warning" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft : '40px'}}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
             </Container>
          </Container>

            
        </Container>         
      <Rodape />
      </div>
  )

 }


export default Cadastro;