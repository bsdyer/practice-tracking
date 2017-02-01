# Practice tracker

This is an application intended to help the music student and teacher budget their practice time.  It has sections for technical exercises and scales, and for your repertoire you are working on, and will have a way to budget your time for your practice session that day.

The hope is to make this a tool administered by teachers to guide their student's practice.

The project is an AngularJs app on top of a node / express setup.

# Application Setup

## The VM
This application has a VM included, you just need to download and install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads), `cd` into the root of this project (the directory with the Vagrantfile and package.json files) and run `vagrant up`

### Provisioning
When you run `vagrant up` for the first time, the box will be provisioned, meaning it will install some requirements for you.  The script will install some prerequisites for nodejs, nodejs, gulp (globally), and mongodb.  After this is done you do not have to do anything to start mongo, etc., all you have to do is run `vagrant up` each time you return to the project and the server will start up everything for you.

### Installing requirements
Once your box is up and running, type `vagrant ssh` into the terminal where you box started and then `cd /vagrant` and run `npm install`.  This will install the required node packages.

## Making Code Changes
When you return to the project, `cd` to the root of the project, run `vagrnat up`, wait for the machine to boot, run `vagrant ssh`, then `cd /vagrant` and run `gulp`.  This will start the server and start the watchers for scss files, etc.  Make your changes in your editor and refresh the page to see the changes.
