FROM node:15.11.0-alpine3.10

WORKDIR /app/frontend
COPY . /app/frontend
RUN npm install --silent 
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]