<template>
    <div class="login-container">
        <div class="login-box">
            <h2> CBMRO - Sistema de Gestão</h2>
            <p>Acesse sua conta</p>

            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label>RE (Registro Estatístico)</label>
                    <input type="text" v-model="email" placeholder="Digite seu RE" required>
                </div>

                <div class="input-group">
                    <label>Senha</label>
                    <input type="password" v-model="password" placeholder="Digite sua senha" required>
                </div>

                <button type="submit">Entrar</button>

            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    // "ref" é como criamos variáveis que o Vue consegue 'observar'
    const email = ref('')
    const password = ref('')

    // Função que será chamada quando clicar no botão
    const handleLogin = () => {
        console.log('Tentativa de login com:', email.value, password.value)
        alert('Botão funcionando! Próximo passo: Conectar ao banco.')
    }
</script>

<style scoped>
    /* O 'scoped' garante que esse CSS só funciona nesta tela*/
    .login-container {
        height: 100%;
        max-height: 800px;
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .login-box {
        background: #d32f2f;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 400px;
        text-align: center;
    }

    .input-group {
        margin-bottom: 1 rem;
        text-align: left;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box; /* evita que o input passe do limite da caixa */
    }

    button {
        width: 100%;
        padding: 10px;
        margin-top: 1rem;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background-color: #b71c1c;
    }

</style>