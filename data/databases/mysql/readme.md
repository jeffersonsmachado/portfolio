```
docker pull mysql
```

```
docker run --name database-mysql -e MYSQL_ROOT_PASSWORD=secret -d mysql:tag
```

```
docker run -it --network some-network --rm mysql mysql -hdatabase-mysql -uroot -psecret
```

```
docker exec -it some-mysql bash
```

```

```
