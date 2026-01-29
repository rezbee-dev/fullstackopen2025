# FastAPI

**Setup**
- `python3 -m venv .venv`
- `source .venv/bin/activate`
  - for Pyenv,
    - `pyenv virtualenv 3.14.2 <name>`
    - `pyenv activate <name>`
    - be sure to add `venv` path in VSCode settings
- `pip install fastapi[standard]`
  - Misc: see [git pr](https://github.com/fastapi/fastapi-cli/pull/197) for why `fastapi-cli` is no longer needed for the `fastapi` command as `fastapi` provides it now
- `pip freeze > requirements.txt`

**Commands**
- Run: `fastapi dev ./app/main.py`