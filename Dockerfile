FROM node:14 as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# docker build . -t imaku-front ##### build or rebuild

# docker images ##### check
