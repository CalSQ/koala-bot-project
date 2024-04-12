FROM nginx:1.21.6
EXPOSE 80
EXPOSE 443
EXPOSE 6001

WORKDIR /credentials
COPY /etc/ssl/cert.pem .
COPY /etc/ssl/key.pem .

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
