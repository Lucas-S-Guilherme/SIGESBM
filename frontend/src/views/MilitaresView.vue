<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    
    // objeto reativo para o formulário
    const form = ref({
        nome_combatente: '',
        cpf_combatente: '',
        data_nascimento_combatente: '',
        telefone_combatente: '', // Adicionado
        email_combatente: '',    // Adicionado
        matricula_combatente: ''
    })

    const militares = ref ([]) // lista para exibir os cadastrados

    // Função para buscar dados do backend
    const buscarMilitares = async () => {
        const response = await axios.get('http://localhost:3000/combatentes')
        militares.value = response.data
    }

    // Função para enviar dados
    const salvarMilitar = async () => {
        try {
            await axios.post('http://localhost:3000/combatentes', form.value)
            alert('Cadastrado com sucesso!')
            buscarMilitares() // atualiza a lista na tela
        } catch (err) {
            alert('Erro ao salvar')
        }
    }

    // Ao abrir a página, busca os militares automaticamente
    onMounted(buscarMilitares)
</script>

<template>
    <div class="pessoal-container">
        <h2>Cadastrar Militar</h2>
        <form @submit.prevent="salvarMilitar" class="form-cadastro">
        <input v-model="form.nome_combatente" placeholder="Nome Completo" required>
        <input v-model="form.cpf_combatente" placeholder="CPF (11 dígitos)" required>
        <input v-model="form.data_nascimento_combatente" type="date" required>
        <input v-model="form.telefone_combatente" placeholder="Telefone (DDD + Número)">
        <input v-model="form.email_combatente" type="email" placeholder="Email">
        <input v-model="form.matricula_combatente" placeholder="Matrícula/RE" required>
        
        <button type="submit">Salvar no Banco</button>
    </form>

        <div class="lista-militares">
            <h3>Militares Cadastrados</h3>
            <ul>
                <li v-for="c in militares" :key="c.id_combatente">
                    {{ c.nome_combatente }} - RE: {{  c.matricula_combatente }}
                </li>
            </ul>
        </div>
        </div>
</template>



<style scoped>
    .pessoal-container { padding: 20px; max-width: 800px; margin: 0 auto; }
    .form-cadastro { display: grid; gap: 10px; margin-bottom: 30px; }
    input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    button { background: #d32f2f; color: white; border: none; padding: 10px; cursor: pointer; }
    ul { list-style: none; padding: 0;}
    li { padding: 10px; border-bottom: 1px solid #ddd; }
</style>