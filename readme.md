# The Artificial Company

A multi‑agent system that can run locally on your machine.

## Prerequisites
- NVIDIA GPU
- Ollama
- Docker

## Installation
Build the Docker image:
    docker build -t the-artificial-company .

Run the container:
    docker run --gpus all -v "$(pwd)/.env:/app/.env" -p 8000:8000 the-artificial-company

For CLI only:
    docker run -it --rm the-artificial-company cli

## Usage
Use the CLI:
    docker run -it --rm the-artificial-company cli
    cli --help
    cli run-agent --config config.yaml

## Directory Tree
- cli
- backend
- docs/git_commit_standards.md

## Environment Variables
Load from .env:
    API_KEY=xxxx
    MODEL_NAME=meta/llama-2-7b
    GPU_COUNT=1

## Security
- Add .env to .gitignore
- Avoid committing .env
- Store API keys in .env

## Contribution Guidelines
See docs/git_commit_standards.md

## License
MIT License
