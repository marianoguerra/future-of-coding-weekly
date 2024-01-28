ARG BASE_IMAGE=ubuntu:20.04

FROM $BASE_IMAGE

ARG UNAME=foc
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

SHELL ["/bin/bash", "-c"]

# Avoid interactive dialogue from tzdata or other packages
ENV DEBIAN_FRONTEND=noninteractive

# Install curl and build essentials
RUN apt-get update && apt-get install -y curl build-essential clang cmake

USER $UNAME

WORKDIR /home/$UNAME

# Install Rust using rustup, select the stable toolchain, and do not install docs
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable --no-modify-path --profile minimal

# Add the cargo bin directory to PATH
ENV PATH="/home/$UNAME/.cargo/bin:${PATH}"
