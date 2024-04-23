import React, { 'Use Client' } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou realizar qualquer ação necessária
    console.log('Dados do formulário:', formData);
  };

  return (
    <div>
      <h2>Formulário de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirme a senha:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Número de telefone:
            <input
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <small>Formato: xxx-xxx-xxxx</small>
          </label>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterForm;


  

