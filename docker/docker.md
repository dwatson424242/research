Docker - Container system to allow apps to share the same Operating system, separating processes.
  - Docker has version control for images. If something gets updated, 
  - Works like SSH or screen. You can connect to the image, run commands from the main login, etc.
  - Security, Never run docker from root otherwise it will compromise the system.
  - You can create a Dockerfile where you can add commands to it. Then run it with 'docker build'
  - Docker is a service that runs on the server all the time.
  
	Example: You may want to create a docker container for Apache, one for Mysql7, one for nodejs, etc.

docker images 

docker run -i -t <imageid> <command>
docker run -i -t 12345 ls -ahl

-i interactive



Notes: 

1) Spin up a new container
2) You can attach volumes to the docker container


Docker FS Layers:

	Top - Writable Container
	Image (Add Apache)
	IMage (Add emacs)
	Base Image (Ubuntu)
	Bootfs - cgroups, namespace, device mapper
	Bottom - Kernal

Tutorial:

http://dokku.viewdocs.io/dokku/deployment/application-deployment/



