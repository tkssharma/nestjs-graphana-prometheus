FROM node:18

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install && \
    rm -rf /tmp/* /var/tmp/*

RUN chown -R node:node /app/*

COPY --chown=node:node  ./docker-utils/entrypoint/init.sh /usr/local/bin/docker-entrypoint.sh

COPY . /app

RUN npm run build

EXPOSE 3000

USER node

ENV TYPEORM_MIGRATION=ENABLE
ENV NPM_INSTALL=ENABLE
CMD npm run start:debug