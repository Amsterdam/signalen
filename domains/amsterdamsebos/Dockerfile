ARG DOCKER_REGISTRY=docker-registry.data.amsterdam.nl
ARG DOCKER_REGISTRY_PATH=/ois/
FROM ${DOCKER_REGISTRY}${DOCKER_REGISTRY_PATH}signalsfrontend:latest

ARG BUILD_ENV=production

COPY ${BUILD_ENV}.config.json /app.json
RUN mv /app.amsterdam.json /app.base.json

# merge assets folder from this repository with assets folder from signals-frontend
COPY ./assets/. /usr/share/nginx/html/assets/
