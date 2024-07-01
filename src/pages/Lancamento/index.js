import ReactDOM from 'react-dom';
import * as C from "./styles";
import React, { useState } from 'react';
import { containerStyle, formStyle, Label, Select } from './styles';
import Input from "../../components/Input";
import Button from "../../components/Button";


function Lancamento() {
    const [formData, setFormData] = useState({
        endereco: '',
        numeroEndereco: '',
        elemento: '',
        tampa: '',
        entrada: '',
        saida: '',
        diametrosEntrada: ['', '', ''],
        diametrosSaida: ['', '', ''],
        rede: '',
        foto: null
    });

    const [formErrors, setFormErrors] = useState({
        endereco: false,
        numeroEndereco: false,
        elemento: false,
        tampa: false,
        entrada: false,
        saida: false,
        rede: false,
        foto: false
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'entrada' || name === 'saida') {
            setFormData(prevState => ({
                ...prevState,
                [name]: Number(value)
            }));
        } else if (name.startsWith('diametroEntrada')) {
            const index = Number(name.split('_')[1]);
            const newDiametros = [...formData.diametrosEntrada];
            newDiametros[index] = value;
            setFormData(prevState => ({
                ...prevState,
                diametrosEntrada: newDiametros
            }));
        } else if (name.startsWith('diametroSaida')) {
            const index = Number(name.split('_')[1]);
            const newDiametros = [...formData.diametrosSaida];
            newDiametros[index] = value;
            setFormData(prevState => ({
                ...prevState,
                diametrosSaida: newDiametros
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: files ? files[0] : value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requiredFields = ['endereco', 'numeroEndereco', 'elemento', 'tampa', 'entrada', 'saida', 'rede', 'foto'];
    
        const isValid = requiredFields.every(field => {
            if (formData[field] === '') {
                setFormErrors(prevState => ({
                    ...prevState,
                    [field]: true
                }));
                return false;
            }
            return true;
        });
    
        if (!isValid) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
    
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((value, index) => {
                    formDataToSend.append(`${key}[${index}]`, value);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });
    
        fetch('URL_DO_ENDPOINT', {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => response.json())
        .then(data => {
            alert('Salvo com sucesso!');
            // Resetar os erros e o formulário após submissão bem-sucedida
            setFormErrors({
                endereco: false,
                numeroEndereco: false,
                elemento: false,
                tampa: false,
                entrada: false,
                saida: false,
                rede: false,
                foto: false
            });
            setFormData({
                endereco: '',
                numeroEndereco: '',
                elemento: '',
                tampa: '',
                entrada: '',
                saida: '',
                diametrosEntrada: ['', '', ''],
                diametrosSaida: ['', '', ''],
                rede: '',
                foto: null
            });
        })
        .catch(error => {
            console.error('Erro ao salvar:', error);
            alert('Ocorreu um erro ao salvar. Por favor, tente novamente.');
        });
    };
    
    const renderDiameterFields = (type) => {
        const fields=[];
        const count = type === 'entrada' ? formData.entrada : formData.saida;
        const diametros = type === 'entrada' ? formData.diametrosEntrada : formData.diametrosSaida;

        return Array.from({ length: count }, (_, index) => (            
            <p key={index}>
                <legend htmlFor={`diametro_${type}_${index}`}>
                    Diâmetro {type === 'entrada' ? 'Entrada' : 'Saída'} {index + 1}:</legend>
                    <select
                        name={`diametro${type === 'entrada' ? 'Entrada' : 'Saida'}_${index}`}
                        value={diametros[index]}
                        onChange={handleChange}
                        style={Select}
                    >
                        <option value="">Selecione...</option>
                        <option value="100mm">100 mm</option>
                        <option value="200mm">200 mm</option>
                        <option value="300mm">300 mm</option>
                        <option value="400mm">400 mm</option>
                        <option value="500mm">500 mm</option>
                        <option value="600mm">600 mm</option>
                        <option value="700mm">700 mm</option>
                        <option value="800mm">800 mm</option>
                        <option value="900mm">900 mm</option>
                        <option value="1000mm">1000 mm</option>
                        <option value="1100mm">1100 mm</option>
                        <option value="1200mm">1200 mm</option>
                    </select>
            </p>
        ));
    };

        return (
            <div style={containerStyle}>
                <C.Container>
                    <header>
                        <h1>Levantamento-Drenagem</h1>
                    </header>
                    <section style={{ backgroundColor: 'white' }}>
                        <h2></h2>
                        <a href="https://play.google.com/store/apps/details?id=com.gpsmapcamera.geotagginglocationonphoto">
                            A foto deve ser tirada pelo Aplicativo GPS Map Camera!
                        </a>
                    </section>
                    
                    <form onSubmit={handleSubmit} style={formStyle}>
                    <legend>Endereço:</legend>
                    <fieldset>
                        <p>
                            <Input 
                                type="text" 
                                name="endereco" 
                                value={formData.endereco} 
                                onChange={handleChange} 
                                placeholder="Rua" 
                            />
                        </p>
                        <br></br>
                        <p>
                            <Input 
                                type="text" 
                                name="numeroEndereco" 
                                value={formData.numeroEndereco} 
                                onChange={handleChange} 
                                placeholder="Número" 
                            />
                        </p>
                    </fieldset>
                    <br></br>
                    <legend>Tipo de elemento:</legend>
                         
                            <select name="elemento" id="elemento" value={formData.elemento} onChange={handleChange} style={Select}>
                                <option value="">Selecione...</option>
                                <option value="caixa_ralo">Caixa ralo</option>
                                <option value="pv">PV</option>
                                <option value="pv_boca_ralo">PV com boca de ralo</option>
                                <option value="mata_burro">Mata burro</option>
                            </select>
                            <br></br><br></br>
                        <legend>Tipo de tampa:</legend>
                            <select name="tampa" id="tampa" value={formData.tampa} onChange={handleChange} style={Select}>
                                <option value="">Selecione...</option>
                                <option value="grelha_concreto">Grelha de concreto</option>
                                <option value="grelha_ferro">Grelha de Ferro</option>
                                <option value="grelha_plastico">Grelha de Plástico</option>
                                <option value="tampao_concreto_cego">Tampão de Concreto Cego</option>
                                <option value="tampao_concreto_furado">Tampão de concreto furado</option>
                                <option value="tampao_concreto_duplo">Tampão de concreto duplo</option>
                                <option value="tampao_redondo">Tampão redondo</option>
                            </select>
                         
                        <br></br><br></br>
                        <legend>Entrada:</legend>
                         
                            <select name="entrada" id="entrada" value={formData.entrada} onChange={handleChange} style={Select}>
                                <option value="">Selecione...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <br></br>
                            <br></br>
                        {renderDiameterFields('entrada')}
                        <br></br>
                        <legend>Saída:</legend>
                        <p>
                            <select name="saida" id="saida" value={formData.saida} onChange={handleChange} style={Select}>
                                <option value="">Selecione...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </p> 
                            <br></br>
                        {renderDiameterFields('saida')}
                        <br></br>
                        <legend>Rede:</legend>
                         
                            <select name="rede" id="rede" value={formData.rede} onChange={handleChange} style={Select}>
                                <option value="">Selecione...</option>
                                <option value="concreto">Concreto</option>
                                <option value="pead">Pead</option>
                                <option value="pvc">PVC</option>
                                <option value="aco">Aço</option>
                            </select>
                            <br></br>
                            <br></br>
                        <legend>Foto:</legend>
                        <fieldset>
                            <input type="file" name="foto" onChange={handleChange} /><br />
                        </fieldset>
                        <br />
                        <Button type="submit" Text="Salvar" onClick={alert}>Enviar</Button>
                    </form>
                    
                    <footer>Desenvolvido por Lucas Duarte.</footer>
                </C.Container>
            </div>
        );
}

export default Lancamento;