FROM node

COPY ./ /www/app

WORKDIR /www/app

ENV NPM_CONFIG_LOGLEVEL warn
ENV MONGODB_URI mongodb://db/courses
ENV PORT 3000
ENV NODE_ENV production

RUN npm i -g pm2
RUN npm i

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && pm2-runtime pm2.json
