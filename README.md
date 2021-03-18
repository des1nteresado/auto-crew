# auto-crew
## docker config (development)
### client (DEV container -> http://localhost:3001/)
#### build
docker build -t crew-client:dev .  
#### run 
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app/frontend \
    -v /app/frontend/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    crew-client:dev
### server (DEV container -> http://localhost:3002/)
#### build
docker build -t crew-backend:dev .  
#### run                
docker run \
    -it \
    --rm \
    -v ${PWD}:/app/backend \
    -v /app/backend/node_modules \
    -p 3002:3001 \
    -e DB_CONNECTION_URL= \
    -e GOOGLE_AUTH_CLIENT_ID= \
    -e GOOGLE_AUTH_CLIENT_SECRET= \
    -e TOKEN_SECRET= \
    -e REFRESH_TOKEN_SECRET= \
    crew-backend:dev
### docker-compose
docker-compose up -d --build  
docker-compose stop    
## docker config (production)
### client (PROD container -> http://localhost:1387/)
#### build
docker build -f Dockerfile.prod -t crew-client:prod .
#### run                
docker run -it --rm -p 1337:80 crew-client:prod
### server (PROD container -> http://localhost:8080/)
#### build
docker build -f Dockerfile.prod -t crew-backend:prod .
#### run                
docker run \
    -it \
    --rm \
    -p 8080:8080 \
    -e NODE_ENV=production \
    -e DB_CONNECTION_URL= \
    -e GOOGLE_AUTH_CLIENT_ID= \
    -e GOOGLE_AUTH_CLIENT_SECRET= \
    -e TOKEN_SECRET= \
    -e REFRESH_TOKEN_SECRET= \
    crew-backend:prod
### docker-compose
docker-compose -f docker-compose.prod.yml up -d --build
docker-compose stop    