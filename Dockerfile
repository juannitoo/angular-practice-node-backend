FROM public.ecr.aws/docker/library/node:slim

USER node

WORKDIR /home/nodejs/app

COPY package.json . 
RUN npm install --omit=dev
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]


# aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 214622732998.dkr.ecr.eu-west-3.amazonaws.com


# docker build -t angular-practice-node-210723 .

# docker run -p 3001:3001 angular-practice-node-210723

# docker tag angular-practice-node-210723 214622732998.dkr.ecr.eu-west-3.amazonaws.com/ecr-backend-node-angular-practice:latest
# docker push 214622732998.dkr.ecr.eu-west-3.amazonaws.com/ecr-backend-node-angular-practice:latest

# docker container ls -a
# docker image ls
# docker container rm container_id
# docker images rm image_id
