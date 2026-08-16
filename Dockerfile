FROM jenkins/jenkins:lts

USER root

# Instalar Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Retornar controle para o usuário jenkins
USER jenkins