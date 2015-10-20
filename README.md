# ghost-aws-ready
This Dockerfile and the 2 extra files allow to build a Ghost blog docker image to run Ghost blog in Amazon Web Services. It will use MySQL as database, whatever email service you prefer and will store your media files in S3. 

It is based on the official Ghost docker image. It has been tested only with the Ghost docker image for 'latest' (being 0.7.1 latest at the moment of writing this). If you prefer you can just pull the image using 'docker pull alvarohurtado84/ghost-aws-ready' or visit [https://hub.docker.com/r/alvarohurtado84/ghost-aws-ready](https://hub.docker.com/r/alvarohurtado84/ghost-aws-ready).

This is the full list of environment variables I added to run your Ghost blog in AWS:

* GHOST\_URL
* MAIL\_TRANSPORT
* MAIL\_HOST
* MAIL\_SERVICE
* MAIL\_USER
* MAIL\_PASS
* MYSQL\_HOST
* MYSQL\_USER
* MYSQL\_PASSWORD
* MYSQL\_DATABASE
* S3\_ACCESS\_KEY
* S3\_SECRET\_KEY\_ID
* S3\_BUCKET\_NAME
* S3\_REGION
* S3\_ASSET\_HOST
* NODE\_ENV (this is mandatory to be set to 'production')

If MAIL_TRANSPORT is not provided, this setup will be ignored as it is not mandatory for Ghost configuration.

If you need some help, contact me on Twitter ([AlvaroLab](http://twitter.com/AlvaroLab)). Or use the tools provided by GitHub.
