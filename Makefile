APP = abr-app-front

.PHONY: install
install:
	docker exec $(APP) composer install --ignore-platform-reqs

.PHONY: migrate
migrate: check ./docker-compose.env
	docker exec $(APP) php artisan migrate

.PHONY: sync-container-to-local
sync-container-to-local: check ./docker-compose.env
	sudo docker cp  $(APP):/app/vendor/ ./vendor
	sudo docker cp  $(APP):/app/composer.json ./composer.json
	sudo docker cp  $(APP):/app/composer.lock ./composer.lock
	sudo docker cp  $(APP):/app/.env ./.env


.PHONY: sync-local-to-container
sync-local-to-container: check ./docker-compose.env
	sudo docker cp ./composer.json $(APP):/app/composer.json
	sudo docker cp ./composer.lock $(APP):/app/composer.lock
	sudo docker cp ./modules_statuses.json $(APP):/app/modules_statuses.json

.PHONY: bash
bash:
	docker exec -it $(APP) bash

.PHONY: consul
consul: check ./docker-compose.env
	docker exec $(APP) rm -f .env
	docker exec $(APP) /app/docker/build/consul.sh

.PHONY: build-front
build-front: check ./docker-compose.env
	docker exec $(APP) bash /app/build/build.sh

.PHONY: route
route: check ./docker-compose.env
	docker exec $(APP) php /app/artisan route:cache

%:
	@:

