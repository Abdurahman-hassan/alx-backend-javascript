# installing nodeJS on macOS using nvm (Node Version Manager)

## 1. download && install nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## 2- add nmv in export path
```bash
 export NVM_DIR="$HOME/.nvm"                                                                   127 ✘ 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
````

# 3- install nodeJS version 12.11
```bash
 nvm install 12.11
```
# 4- use nodeJS version 12.11
```bash
 nvm use 12.11
```

# 5- check nodeJS version
```bash
 node -v
```

