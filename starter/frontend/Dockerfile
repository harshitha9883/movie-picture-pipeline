FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG REACT_APP_MOVIE_API_URL=http://localhost:5000
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
