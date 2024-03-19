FROM node:21.1.0

WORKDIR /app
COPY . .

EXPOSE 3000
RUN npm install
CMD ["npm", "run", "dev"]