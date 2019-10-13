@echo off
echo Para DOS use \
:: http-server -c-1 dist\ngproj (nao deu)
:: npm install -g http-server-spa@1.3.0 (soh na instalacao)
echo Buildando em prod...
ng build --prod --source-map

