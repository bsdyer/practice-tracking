echo "----------------Start Provisioning----------------------"
echo "----------------Installing General Requirements----------------------"
sudo apt-get install -y g++
echo "----------------End General Requirements----------------------"
echo "----------------Installing Node----------------------"
sudo apt-get install -y g++
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs
echo "----------------End Node----------------------"
echo "----------------Instaling Gulp----------------------"
sudo npm install -g gulp
echo "----------------End Gulp----------------------"
echo "----------------Installing Mongo----------------------"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
echo "----------------End Mongo----------------------"
echo "----------------End Provisioning----------------------"
