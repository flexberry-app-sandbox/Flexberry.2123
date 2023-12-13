docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 2123-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 2123-java/app ../../..
