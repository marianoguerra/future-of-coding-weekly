# Search

## Setup

### Install Sonic

https://github.com/valeriansaliou/sonic

### Start it

```
sonic -c search/sonic/config.cfg
```

### Ingest data

Install dependencies:

```
pip3 install asonic sanic
```

Ingest:

```
python3 search/tools/ingest.py 'history/20*'
```

### Start Local Server

```
python3 search/server.py
```

Open http://localhost:8080/index.html

### Search

```
python3 search.py general victor
```

Sample output:

```
...
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-04-15&toDate=2020-04-16&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-04-18&toDate=2020-04-19&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-04-28&toDate=2020-04-29&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-04-29&toDate=2020-04-30&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-05-01&toDate=2020-05-02&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-05-07&toDate=2020-05-08&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-05-15&toDate=2020-05-16&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-05-24&toDate=2020-05-25&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-05-25&toDate=2020-05-26&channel=general&filter=
https://marianoguerra.github.io/future-of-coding-weekly/history/?fromDate=2020-07-07&toDate=2020-07-08&channel=general&filter=
```

### Server setup

```
id -u foc >/dev/null 2>&1 || useradd foc -s /bin/bash -m

mkdir -p /home/foc/.ssh
cp /root/.ssh/authorized_keys /home/foc/.ssh/
chown -R foc.foc /home/foc/.ssh/

mkdir -p /opt/foc/
chown -R foc.foc /opt/foc

#

add-apt-repository -y ppa:certbot/certbot
apt update -y
DEBIAN_FRONTEND=noninteractive apt-get -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" dist-upgrade
apt autoremove -y                                                                             apt install -y nginx vim tmux tree htop python3-pip
# for sonic-server build
apt install -y build-essential clang libclang-dev libc6-dev g++ llvm-dev

# EOL quoted to avoid expansion of heredoc variables
cat > /etc/nginx/sites-available/default << 'EOL'
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /opt/foc/dist/static/;

        index index.html;

        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/pdf;

        location / {
                try_files $uri $uri/ =404;
        }

        location /search/ {
                proxy_pass http://127.0.0.1:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header Host $host;
        }
}
EOL

#

systemctl enable nginx
systemctl start nginx
```

As foc user once:

```
pip3 install asonic sanic
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install sonic-server
```
