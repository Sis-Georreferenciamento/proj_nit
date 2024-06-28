import ReactDOM from 'react-dom';
import * as C from "./styles";
import React, { useState } from 'react';
import { containerStyle, formStyle, Label } from './styles';

function Lancamento() {
    const [formData, setFormData] = useState({
        elemento: '',
        tampa: '',
        entrada: 1,
        saida: 1,
        diametrosEntrada: ['', '', ''],
        diametrosSaida: ['', '', ''],
        rede: '',
        foto: null
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
        const isValid = Object.values(formData).every(value => value !== '');
        if (!isValid) {
            alert('Por favor, preencha todas as opções.');
            return;
        }
        // Enviar os dados do formulário
        console.log(formData);
    };

    const renderDiameterFields = (type) => {
        const fields = [];
        const count = type === 'entrada' ? formData.entrada : formData.saida;
        const diametros = type === 'entrada' ? formData.diametrosEntrada : formData.diametrosSaida;
        
        return Array.from({ length: count }, (_, index) => (
            <p key={index}>
                <legend htmlFor={`diametro_${type}_${index}`}>Diâmetro {type === 'entrada' ? 'Entrada' : 'Saída'} {index + 1}:</legend>
                <select name={`diametro${type === 'entrada' ? 'Entrada' : 'Saida'}_${index}`} value={diametros[index]} onChange={handleChange}>
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



       // for (let i = 0; i < count; i++) {
         //   fields.push(
           //     <p key={i}>
             //       <label htmlFor={`diametro_${type}_${i}`}>Diâmetro {type === 'entrada' ? 'Entrada' : 'Saída'} {i + 1}:</label>
               //     <input type="text" name={`diametro${type === 'entrada' ? 'Entrada' : 'Saida'}_${i}`} value={diametros[i]} onChange={handleChange} />
                //</p>
            //);
        //}
        //return fields;
    //};



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
                        <legend>Tipo de elemento:</legend>
                    <fieldset>
                        <p>
                            <input type="radio" name="elemento" id="elemento_1" value="caixa_ralo" onChange={handleChange} />
                            <label htmlFor="elemento_1">Caixa ralo</label>
                        </p>
                        <p>
                            <input type="radio" name="elemento" id="elemento_2" value="pv" onChange={handleChange} />
                            <label htmlFor="elemento_2">PV</label>
                        </p>
                        <p>
                            <input type="radio" name="elemento" id="elemento_3" value="pv_boca_ralo" onChange={handleChange} />
                            <label htmlFor="elemento_3">PV com boca de ralo</label>
                        </p>
                        <p>
                            <input type="radio" name="elemento" id="elemento_4" value="mata_burro" onChange={handleChange} />
                            <label htmlFor="elemento_4">Mata burro</label>
                        </p>
                    </fieldset>
                    <br></br>
                    <legend>Tipo de tampa:</legend>
                    <fieldset>
                        <p>
                            <input type="radio" name="tampa" id="tampa_1" value="grelha_concreto" onChange={handleChange} />
                            <label htmlFor="tampa_1">Grelha de concreto</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_2" value="grelha_ferro" onChange={handleChange} />
                            <label htmlFor="tampa_2">Grelha de Ferro</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_3" value="grelha_plastico" onChange={handleChange} />
                            <label htmlFor="tampa_3">Grelha de Plástico</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_4" value="tampao_concreto_cego" onChange={handleChange} />
                            <label htmlFor="tampa_4">Tampão de Concreto Cego</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_5" value="tampao_concreto_furado" onChange={handleChange} />
                            <label htmlFor="tampa_5">Tampão de concreto furado</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_6" value="tampao_concreto_duplo" onChange={handleChange} />
                            <label htmlFor="tampa_6">Tampão de concreto duplo</label>
                        </p>
                        <p>
                            <input type="radio" name="tampa" id="tampa_7" value="tampao_redondo" onChange={handleChange} />
                            <label htmlFor="tampa_7">Tampão redondo</label>
                        </p>
                    </fieldset>
                    <br></br>
                    <legend>Entrada:</legend>
                    <fieldset>
                        <p>
                            <input type="radio" name="entrada" id="entrada_1" value="1" onChange={handleChange} checked={formData.entrada === 1} />
                            <label htmlFor="entrada_1">1</label>
                        </p>
                        <p>
                            <input type="radio" name="entrada" id="entrada_2" value="2" onChange={handleChange} checked={formData.entrada === 2} />
                            <label htmlFor="entrada_2">2</label>
                        </p>
                        <p>
                            <input type="radio" name="entrada" id="entrada_3" value="3" onChange={handleChange} checked={formData.entrada === 3} />
                            <label htmlFor="entrada_3">3</label>
                        </p>
                    </fieldset>
                    <br></br>
                    {renderDiameterFields('entrada')}
                    <br></br>
                    <legend>Saída:</legend>
                    <fieldset>
                        <p>
                            <input type="radio" name="saida" id="saida_1" value="1" onChange={handleChange} checked={formData.saida === 1} />
                            <label htmlFor="saida_1">1</label>
                        </p>
                        <p>
                            <input type="radio" name="saida" id="saida_2" value="2" onChange={handleChange} checked={formData.saida === 2} />
                            <label htmlFor="saida_2">2</label>
                        </p>
                        <p>
                            <input type="radio" name="saida" id="saida_3" value="3" onChange={handleChange} checked={formData.saida === 3} />
                            <label htmlFor="saida_3">3</label>
                        </p>
                    </fieldset>
                    <br></br>
                    {renderDiameterFields('saida')}
                    <br></br>
                    <legend>Rede:</legend>
                    <fieldset>
                        <p>
                            <input type="radio" name="rede" id="rede_1" value="concreto" onChange={handleChange} />
                            <label htmlFor="rede_1">Concreto</label>
                        </p>
                        <p>
                            <input type="radio" name="rede" id="rede_2" value="pead" onChange={handleChange} />
                            <label htmlFor="rede_2">Pead</label>
                        </p>
                        <p>
                            <input type="radio" name="rede" id="rede_3" value="pvc" onChange={handleChange} />
                            <label htmlFor="rede_3">PVC</label>
                        </p>
                        <p>
                            <input type="radio" name="rede" id="rede_4" value="aco" onChange={handleChange} />
                            <label htmlFor="rede_4">Aço</label>
                        </p>
                    </fieldset>
                    <br></br>
                    <legend>Foto:</legend>
                    <fieldset>
                        <input type="file" name="foto" onChange={handleChange} /><br />
                    </fieldset>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </C.Container>
            <br />
            <footer>Desenvolvido por Lucas Duarte.</footer>
        </div>
    );
}

export default Lancamento;