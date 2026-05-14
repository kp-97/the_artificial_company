FROM node:trixie-slim

# Create non-root user
RUN groupadd -g 10001 nonroot && \
    useradd -u 10000 -g nonroot -m -s /bin/bash nonroot

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git curl tini ssh\
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set ownership early
RUN chown nonroot:nonroot /app
USER nonroot

# Add local bin to PATH
ENV PATH="/home/nonroot/.local/bin:${PATH}"


# Copy source code
COPY --chown=nonroot:nonroot . .