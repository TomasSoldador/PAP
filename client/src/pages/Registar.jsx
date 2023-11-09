import * as Components from "../Styles/Registar";
import React, { useState } from 'react';

function Registar () {

   const [name, setName] = useState('');
   const [gender, setGender] = useState('');
   const [avatar, setAvatar] = useState(null);
   const [dataNascimento, setDataNascimento] = useState("");
   const [descricao, setDescricao] = useState("");
   const [outro, setOutro] = useState(false);



   // Input data
   const [dia, setDia] = useState('');
   const [mes, setMes] = useState('');
   const [ano, setAno] = useState('');
   
   const startYear = new Date().getFullYear() - 80;
   const endYear = new Date().getFullYear();

   const anos = Array.from({ length: endYear - startYear + 1 }, (_, index) => ({
      label: `${startYear + index}`,
      value: `${startYear + index}`,
   }));

   const meses = [
      { label: 'Janeiro', value: '01' },
      { label: 'Fevereiro', value: '02' },
      { label: 'Março', value: '03' },
      { label: 'Abril', value: '04' },
      { label: 'Maio', value: '05' },
      { label: 'Junho', value: '06' },
      { label: 'Julho', value: '07' },
      { label: 'Agosto', value: '08' },
      { label: 'Setembro', value: '09' },
      { label: 'Outubro', value: '10' },
      { label: 'Novembro', value: '11' },
      { label: 'Dezembro', value: '12' },
   ];

   const dias = Array.from({ length: 31 }, (_, index) => ({
      label: `${index + 1}`,
      value: `${index + 1 < 10 ? '0' : ''}${index + 1}`,
   }));


   // TODO: Enviar a imagem para uma pasta e depois enviar so o endereço da imagem para a base de dados
   // Input da imagem
   const handleImageChange = (event) => {
      const file = event.target.files[0];
      setAvatar(file);
   };
   const handleImageRemove = () => {
      setAvatar(null);
   };

   // Radio buttons
   const RadioOutro = () => {
      setGender("");
      setOutro(true);
   }

   const RadioMasculino = () => {
      setGender('Masculino')
      setOutro(false)
   }

   const RadioFemenino = () => {
      setGender('Feminino')
      setOutro(false)
   }

   // TODO: criar a parte no cliente e no servidor para enviar os dados para a base de dados
   // TODO: Verificar se a data é valida antes de enviar
   // Enviar os dados para a base de dados
   const Criar = () => {
      alert(name + ' ' + gender + ' ' + avatar + ' ' + descricao + ' ' + dataNascimento)

      setName('');
      setGender('');
      setAvatar(null);
      setDescricao('');
      setDataNascimento('');
   }


   return (
      <Components.AllContainer>
         <Components.Container>
            <Components.Form>
               <Components.Title> Bem Vindo! </Components.Title>
               <Components.Paragraph> Vamos configurar algumas coisas na sua conta </Components.Paragraph>
               <Components.ImageInputWrapper>
                  {avatar ? (
                  <img
                     src={URL.createObjectURL(avatar)}
                     alt="Imagem selecionada"
                     style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                     onClick={handleImageRemove}
                  />
                  ) : (
                  <React.Fragment>
                     <span>+</span>
                     <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                     />
                  </React.Fragment>
                  )}
               </Components.ImageInputWrapper>
               <Components.Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Username"
               />
               <Components.Input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descrição"
               />

               <Components.DataInputWrapper>
                  <Components.DataInput
                     label="Dia:"
                     value={dia}
                     onChange={(e) => setDia(e.target.value)}
                     options={dias}
                  />
                  <Components.DataInput
                     label="Mes:"
                     value={mes}
                     onChange={(e) => setMes(e.target.value)}
                     options={meses}
                  />
                  <Components.DataInput
                     label="Ano:"
                     value={ano}
                     onChange={(e) => setAno(e.target.value)}
                     options={anos}
                  />
               </Components.DataInputWrapper>

               <Components.RadioWrapper>
                  <Components.RadioLabel>
                     <Components.RadioInput type="radio" name="gender" onChange={RadioMasculino} />
                     Masculino
                  </Components.RadioLabel>

                  <Components.RadioLabel>
                     <Components.RadioInput type="radio" name="gender" onChange={RadioFemenino} />
                     Feminino
                  </Components.RadioLabel>

                  <Components.RadioLabel>
                     <Components.RadioInput type="radio" name="gender" onChange={RadioOutro} />
                     Outro
                  </Components.RadioLabel>
               </Components.RadioWrapper>

               {outro && (
                  <Components.Input
                     type="text"
                     value={gender}
                     onChange={(e) => setGender(e.target.value)}
                     placeholder="Género (opcional)"
                  />
               )}
               
               <Components.Button onClick={Criar}>
                  Criar
               </Components.Button>
            </Components.Form>
         </Components.Container>
      </Components.AllContainer>
   )
}

export default Registar;