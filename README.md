# Aurelia with JSPM v0.17-beta.7

## Steps to run the app with docker

```shell 
$ git clone git@github.com/ahmedshuhel/sleepy-eye.git

$ docker pull ahmedshuhel/aurelia_jspm017beta

$ docker run -it -p 8000:8000 -v /c/Users/Shuhel/Workspace/aurelia/playground/sleepy-eye:/home/sleepy-eye jspm:beta  http-server /home/sleepy-eye -p8000 

```

> Change the docker volume mout path mapping as per your need/filesystem.
