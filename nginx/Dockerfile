FROM nginx:latest

WORKDIR /credentials
COPY ./credentials /credentials

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
