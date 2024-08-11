## Bot Discord para Notificações de Novos Vídeos no YouTube

### Introdução
Este bot Discord é projetado para monitorar um canal específico no YouTube e enviar uma notificação para um canal pré-definido no seu servidor Discord sempre que um novo vídeo for publicado.

### Pré-requisitos
* **Node.js e npm (ou yarn) instalados:** Baixe e instale as últimas versões em https://nodejs.org/.
* **Conta do Google:** Necessária para criar a API do YouTube.
* **Servidor Discord:** Onde o bot será adicionado.

### Configuração
#### 1. **Crie uma aplicação e bot no Discord:**
   * Acesse o Portal de Desenvolvedores do Discord: https://discord.com/developers/applications.
   * Crie uma nova aplicação.
   * Crie um bot para essa aplicação e anote o **token do bot**.

#### 2. **Crie uma API do YouTube:**
   * Acesse o Console do Google Cloud Platform: https://console.cloud.google.com/.
   * Crie um novo projeto ou selecione um existente.
   * Habilite a API YouTube Data API v3.
   * Crie as credenciais de API e anote a **chave da API**.

#### 3. **Clone o repositório:**
   * Clone este repositório para sua máquina local.

#### 4. **Instale as dependências:**

   ```bash
   npm install
   ```


#### 5.  **Crie o arquivo .env:**
Crie um arquivo chamado .env na raiz do seu projeto e adicione as seguintes linhas, substituindo os valores pelos seus:

    ```bash
    DISCORD_TOKEN=seu_token_do_discord
    API_KEY_YT=sua_chave_da_api_do_youtube
    ID_CANAL=id_do_canal_no_discord_onde_as_notificações_serão_enviadas
    ```
### Rodando o Bot

#### 6.  **Inicie o bot:**

    ```Bash
    npm run dev`
    ```


### Personalização

#### **Intervalo de verificação:** 

Modifique a expressão cron em schedule("* * 0 * * *", checkNewVideos) para alterar a frequência de verificação.

#### Canais: 
Altere o channelId na função checkNewVideos para monitorar outros canais do YouTube.
#### Mensagens: 
Personalize a mensagem enviada no Discord.

### Observações

#### **Segurança:**
Guarde suas chaves de API em um lugar seguro e nunca as compartilhe publicamente.