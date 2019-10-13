# === Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

i  .firebaserc already has a default project, using teste-bda70.

# === Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

# antes de jogar o conteudo do DIST, initializei 
--------------[consagrada]---
# no processo de build -> public, apagar o conteudo do public e tem q reINIT 
# o public com o Firebase
? What do you want to use as your public directory? `<- NADA`
? Configure as a single-page app (rewrite all urls to /index.html)? `Yes`
? File /index.html already exists. Overwrite? `No`
i  Skipping write of /index.html


# COMANDOS
firebase login
firebase init 
firebase deploy 

* testar ng @firebase/tools 

