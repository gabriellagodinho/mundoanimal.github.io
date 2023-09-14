from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/agendamento', methods=['POST'])
def agendamento():
    if request.method == 'POST':
        nome = request.form['nome']
        servico = request.form['servico']
        data = request.form['data']

        # Processar dados e enviar notificações
        # ...

        return 'Agendamento realizado com sucesso!'

if __name__ == '__main__':
    app.run()

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/creche', methods=['POST'])
def creche():
    if request.method == 'POST':
        nome_cachorro = request.form['nome-cachorro']
        idade_cachorro = request.form['idade-cachorro']
        data_nascimento = request.form['data-nascimento']
        periodo_hospedagem = request.form['periodo-hospedagem']
        matricula = request.form['matricula']

        # Processar dados e enviar notificações
        # ...

        return 'Reserva na creche realizada com sucesso!'

if __name__ == '__main__':
    app.run()

import smtplib
from email.mime.text import MIMEText

def enviar_email(destinatario, assunto, mensagem):
    remetente = 'seuemail@example.com'
    senha = 'suasenha'

    msg = MIMEText(mensagem)
    msg['Subject'] = assunto
    msg['From'] = remetente
    msg['To'] = destinatario

    server = smtplib.SMTP('smtp.example.com', 587)
    server.starttls()
    server.login(remetente, senha)
    server.sendmail(remetente, destinatario, msg.as_string())
    server.quit()

# Uso do envio de e-mail
enviar_email('cliente@example.com', 'Agendamento Confirmado', 'Seu agendamento foi confirmado!')

import requests

# Dados do agendamento obtidos do formulário
nome = "Nome do Cliente"
servico = "Banho"
data = "2023-09-01"
horario = "09:00"

# Dados da empresa (endereço da API de notificação)
url_empresa = "https://exemplo.com/api/notificacao"

# Criar o payload com os dados do agendamento
payload = {
    "nome": nome,
    "servico": servico,
    "data": data,
    "horario": horario
}

# Enviar o payload para a empresa
response = requests.post(url_empresa, json=payload)

# Verificar a resposta
if response.status_code == 200:
    print("Agendamento enviado com sucesso para a empresa!")
else:
    print("Erro ao enviar o agendamento para a empresa.")
