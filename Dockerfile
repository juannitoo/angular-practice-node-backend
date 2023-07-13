FROM public.ecr.aws/docker/library/node:slim

USER node

WORKDIR /home/nodejs/app

COPY package.json . 
RUN npm install --omit=dev
COPY . .

# ENV NODE_ENV production

EXPOSE 80

CMD ["node", "server.js"]


# docker build -t angular-practice-node-1307-16h .
# docker run -p 80:3001 angular-practice-node-1307-16h

# docker container ls -a
# docker image ls
# docker container rm container_id
# docker images rm image_id

# j"expose le port 80 du conteneur mappé au port 3001 de node
# comme ca adresse http://localhost/ et ca fonctionne