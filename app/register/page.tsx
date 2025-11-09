"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      phone: '',
      email: '',
      age: ''
    };

    // Validação do nome
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
      isValid = false;
    }

    // Validação do telefone (formato básico: mínimo 10 dígitos)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido (mínimo 10 dígitos)';
      isValid = false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    // Validação da idade (entre 18 e 120 anos)
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18 || age > 120) {
      newErrors.age = 'Idade deve ser entre 18 e 120 anos';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aqui você pode implementar a lógica de registro
      console.log('Dados do formulário:', formData);
      // Limpar formulário após sucesso
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        age: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '24px',
        color: '#898989'
      }}>Registro de Usuário</h1>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#898989'
          }}>
            Nome Completo:
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #eaeaea',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.fullName && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.fullName}</span>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#898989'
          }}>
            Telefone:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(99) 99999-9999"
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #eaeaea',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.phone && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.phone}</span>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#898989'
          }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #eaeaea',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#898989'
          }}>
            Idade:
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            max="120"
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #eaeaea',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.age && (
            <span style={{ color: 'red', fontSize: '14px' }}>{errors.age}</span>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '16px',
            transition: 'background-color 0.2s'
          }}
        >
          Registrar
        </button>

        <Link
          href="/"
          style={{
            textAlign: 'center',
            color: '#666',
            textDecoration: 'none',
            marginTop: '16px',
            fontSize: '14px'
          }}
        >
          Voltar para Home
        </Link>
      </form>
    </div>
  );
}