cls 
c:
cd\ngproj
echo Copiando ...
cd\ngproj\dist
echo Estou no DIST
echo.
echo.
echo Começando a copia ...
copy *.* c:\ngproj\public 
echo Deploing ...
cd\ngproj\public 
firebase deploy
cd\ngproj



