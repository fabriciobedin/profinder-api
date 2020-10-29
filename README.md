# AgendaPro

## Commands
```sh
docker run --name agendapro_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

lsof -i :5432               # verify if port is being used
docker start id_container   # start container
docker logs id_container    # show logs
```

```
yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
yarn typeorm migration:revert
yarn typeorm migration:show
```