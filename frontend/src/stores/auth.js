import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
 // 1. State: quem é o usuário logado? (começa nulo)
  const user = ref(null)
  const token = ref('')

  // 2. Action: Função para simular o login
  function login(email, senha) {
    //Aqui será feito a conexão com o BackEnd Real
    if (email && senha) {
      user.value = {
        nome: 'Soldado ryan',
        email: email,
        patente: 'SD BM'
      }
      token.value = 'token-falso-123456'
      return true // login deu certo
    }
    return false // login falhou
  }
  // 3. Action: Logout
  function logout () {
    user.value = null
    token.value = ''
  }
  return { user, token, login, logout }
})
