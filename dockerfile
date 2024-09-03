FROM php:8.2-fpm

# Copy your application code
COPY . /var/www/html

# Install dependencies (if needed)
RUN apt-get update && apt-get install -y libapache2-mod-php

# Expose the port your application listens on (e.g., 8080)
EXPOSE 8080
