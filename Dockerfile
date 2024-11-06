# Use PHP 8.0 with Apache from Docker Hub
FROM php:8.0-apache

# Install necessary dependencies for Laravel (GD library, libpng, etc.)
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev git unzip && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the Laravel files from your project to the container
COPY . .

# Install Composer (PHP dependency manager) globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies via Composer
RUN composer install

# Expose port 80 for the Apache server
EXPOSE 80
