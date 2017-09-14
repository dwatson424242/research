# Ethereum Research & Notes

1.1 Building a Geth Server

1.1.1 Create a new AWS instance

 - Create a Small Instance, Ubuntu Server
 - You need at least 128GB storage
 - SSH to the server
 - Geth needs 4 megs of ram minimum. See 1.1.4 for setting up swap space.

1.1.2 Install GETH on AWS

```bash
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

1.1.3 Create a secret key and store it in a safe place

```
geth account new
```

1.1.4 Create swap space for Geth to run.

https://hackernoon.com/how-to-run-geth-at-512mb-ram-digital-ocean-droplet-e346986cf666
```bash
$ sudo fallocate -l 2G /swapfile # Creates a file of a preallocated size 
$ sudo chmod 600 /swapfile # adjust the permissions 
$ sudo mkswap /swapfile # set up the swap space 
$ sudo echo '/swapfile none swap sw 0 0' >> /etc/fstab # enable swap 
$ sudo echo 'vm.swappiness=30' >> /etc/sysctl.conf # optional. The default swappiness (i.e. system willingness to use swap) is 60. You can set it to 30 if you care. As swap gradually kills SDDs. In my experience 30 is enough and it feels more eco-friendly. 
$ sudo /sbin/shutdown -r now # reboot 
$ free -mh # now you should see your swap usage.
```




1.1.5 Download the Blockchain (with a custom directory)

```
geth --datadir .ethereum/mainnet/ --fast
```


 

This is a basic list of technologies that I have looked at, experimented with, and that may or may not be useful. Everything here is for learning and experimenting.
