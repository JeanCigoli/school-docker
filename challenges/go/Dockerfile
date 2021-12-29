FROM golang:1.17 as builder

WORKDIR /go/src/app

RUN go mod init cigoli/codeeducation

COPY ./main.go .

RUN go build

# BUILD
FROM scratch

WORKDIR /go/src/app

COPY --from=builder /go/src/app/codeeducation /go/src/app

CMD ["./codeeducation"]



