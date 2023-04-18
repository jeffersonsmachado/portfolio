Run build

`docker build -t backend-dotnet .`

Run start

`docker run -it --rm -p 3000:80 --name backend-docket-container backend-dotnet`
