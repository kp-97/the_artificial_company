"""Utility that walks a directory tree and returns a JSON‑compatible dict."""
import json
import pathlib
from typing import Dict

def walk_path(root: pathlib.Path) -> Dict:
    """
    Recursively walk *root* and return a nested dict that matches your schema.
    """
    def _walk(p: pathlib.Path) -> Dict:
        node = {
            "name": p.name,
            "type": "directory" if p.is_dir() else "file",
            "description": "",
            "children": list,
        }
        if p.is_dir():
            node["children"] = [_walk(c) for c in sorted(p.iterdir(), key=lambda x: x.name)]
        return node

    return _walk(root)

def generate_docs(
    root: pathlib.Path = pathlib.Path("."),
    output: pathlib.Path = pathlib.Path("docs/tree.json")
) -> None:
    """
    Generate the tree and write it as pretty‑printed JSON.
    """
    data = walk_path(root)

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(data, indent=2))
    print(f"Tree written to {output}")
