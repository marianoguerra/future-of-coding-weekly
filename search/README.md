# Search

## Setup

### Install Sonic

https://github.com/valeriansaliou/sonic

### Start it

```
sonic -c config.cfg
```

### Ingest data

Install dependencies:

```
pip3 install asonic
```

```
python3 ingest.py '../history/20*'
```

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
