#
# Ghost AWS Ready Dockerfile 
# https://github.com/alvarohurtado84/ghost-aws-ready
#
# Builds:
# https://hub.docker.com/r/alvarohurtado84/ghost-aws-ready/
#
FROM ghost

# Setup the ghost-s3-storage module
RUN npm install --save ghost-s3-storage
ADD storage-s3-index.js /var/lib/ghost/storage/ghost-s3/index.js
RUN ln -s /usr/src/ghost/node_modules/ /node_modules

# Because of how the original ghost docker image is built and how
# ghost blog is run, the config.example.js will finally become config.js
COPY config.template.js /usr/src/ghost/config.example.js
