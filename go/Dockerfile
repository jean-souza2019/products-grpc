FROM golang:1.21.3

WORKDIR /app

COPY . .

RUN go build -o main ./cmd/server

EXPOSE 50051

CMD ["./main"]
