# Use the official Nginx image
FROM nginx:latest

# Copy the built React app to the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
