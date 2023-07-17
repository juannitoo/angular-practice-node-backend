FROM public.ecr.aws/docker/library/node:slim

USER node

WORKDIR /home/nodejs/app

COPY package.json . 
RUN npm install --omit=dev
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]


# docker build -t angular-practice-node-1307-16h .
# docker run -p 80:3001 angular-practice-node-1307-16h

# docker container ls -a
# docker image ls
# docker container rm container_id
# docker images rm image_id
