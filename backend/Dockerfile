FROM python:3.12-slim-bookworm
WORKDIR /usr/local/app

# Grab uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /usr/local/bin/

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy only the toml first (better for layer caching)
COPY pyproject.toml .

# Install ONLY the dependencies listed in the project section
# --system: Install to global site-packages
# --pyproject: Tells uv to read the dependencies from pyproject.toml
RUN uv pip install --system -r pyproject.toml

COPY . .