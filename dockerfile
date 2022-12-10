FROM node:16-alpine:

USER micro

RUN mkdir /home/applications
WORKDIR /home/applications

COPY --chown=micro:micro . .

RUN npm i -g yarn;
# install npm packages from package-lock
RUN yarn install --frozen-lockfile;
