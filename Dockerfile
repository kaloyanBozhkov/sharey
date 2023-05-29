# MySQL db for local use

FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=sharey

VOLUME /var/lib/mysql

EXPOSE 3308

CMD ["mysqld"]

# Steps to run:
# docker build -t mercury-db .       
# docker run --name mercury-db -d -p 3308:3306 mercury-db
# docker exec -it mercury-db mysql -u root -p
# CREATE DATABASE mercury
# be sure to create database and update the connetion URL in .env
