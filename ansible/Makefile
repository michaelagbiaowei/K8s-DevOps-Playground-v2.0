.PHONY: install_ansible exe

install_ansible:
	sudo apt update
	sudo apt install ansible -y
exe:
	ansible-playbook -i host main.yml --private-key=pem.pem --vault-password-file vault_pass.txt
	
