.PHONY: install deploy

install:
	sudo apt update
	sudo apt install ansible -y

deploy:
	ansible-playbook -i host main.yml --private-key=/path/to/private-key.pem --vault-password-file /path/to/vault-password.txt
	
