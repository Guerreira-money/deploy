import validator from 'validator';



// Função para validar dados do usuário
export const validateUserData = (email, password) => {
  if (!email || !password) {
    throw new Error('Email e senha são obrigatórios');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email inválido');
  }
  if (password.length < 6) {
    throw new Error('A senha deve ter pelo menos 6 caracteres');
  }
};

