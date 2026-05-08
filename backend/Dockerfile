FROM python:3.12-slim-bookworm
WORKDIR /usr/local/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    openssh-client \
    tree \
    && rm -rf /var/lib/apt/lists/*

COPY . .
RUN python -m pip install --upgrade pip && \
    pip install --no-cache-dir -e .