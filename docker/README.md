# Attention, ce dossier ne fait pas parti de ce repo 
et doit être placé dans son venv python perso pour installerles dépendances chrome et chromedriver avant de créer l'image via docker m'évite là de créer un repo spécial pour ca sur githu.

### pour s'en servir, il faut faire un couper coller hors du dossier racine stats-and-co et de son venv



### Pour créer l'image docker avec selenium et chrome, il faut :
1. créer un dossier spécial et y créer un venv pour y installer nos dépendances, ici selenium, 
    via python -m venv env et pip install selenium, ensuite pip freeze > requirements.txt
    ATTENTION à la version de python qui doit correspondre à l'éxécution sur AWS
2. mettre notre fonction dans app.py avec ses imports from...,
3. créer le dockerfile :
    1. je me suis basé sur le script de github/umihico. les versions de chrome et chromedriver sont primordiales pour selenium
    2. 2 steps via 2 images sont nécessaires pour alléger l'image finale et qu'elle se charge plus vite (déjà 45s comme ca)
    3. on télécharge les images python (ou node...) depuis le hub amazon qui sont prévues pour ! Lien en dessous
    4. on télécharge et dézippe chrome + driver absolument dans le dossier /opt du conteneur pour aws, voir plus profond selon, /opt/.../site-packages/
    5. on recrée une image en se basant sur la précédente --from=build ou on copie en réageancant le dossier opt
    6. on lance la fonction handler du fichier app du repertoire où est le dockerfile


### Déploiement :
Tous les jours il faut se relogguer avec docker avec une commande trouvable sur le repo aws ecr et qui va lier notre docker au repo aws puis :
```
docker build -t selenium_lanutrition_ss_json .

docker tag selenium_lanutrition:latest XXXXXXXXXXXX.dkr.ecr.eu-west-3.amazonaws.com/selenium:selenium-lanutrition

docker push 214622732998.dkr.ecr.eu-west-3.amazonaws.com/selenium:selenium-lanutrition-ss-json
```

### Dernière étape, configuration aws
1. il faut rajouter de la mémoire à la fonction aws, là je suis à 512mb 
3. attribuer une url et la sécuriser.



### Liens utiles
https://github.com/umihico/docker-selenium-lambda

https://gallery.ecr.aws/lambda/python 

https://gallery.ecr.aws/?page=1

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-images.html#configuration-images-create

https://docs.aws.amazon.com/lambda/latest/dg/python-image.html

https://docs.aws.amazon.com/lambda/latest/dg/images-test.html#images-test-limitations

https://docs.aws.amazon.com/fr_fr/AmazonECR/latest/userguide/docker-push-ecr-image.html

https://docs.docker.com/engine/reference/builder/  

https://docs.docker.com/engine/reference/commandline/build/#tag  


### pour sortir un pdf du contenu avec chrome headless
<code>google-chrome --headless=new --print-to-pdf https://developer.chrome.com/</code>



# pour envoyer l'image, créer le referentiel et suivre les instructions donnés sur le referentiel
docker tag angular-practice-node-130723-20h 214622732998.dkr.ecr.eu-west-3.amazonaws.com/ecr-backend-node-angular-practice:latest

# pour mettre le conteneur en route sur ecs, faut définir une tache
https://docs.aws.amazon.com/fr_fr/AmazonECS/latest/developerguide/getting-started-fargate.html

# https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule
ajouter des regles tcp udp

pour donner un role il faut aller voir dans iam et chercher ecs 
arn:aws:iam::214622732998:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS

# il faut ouvrir tous les port outbound dans le vpc aws et le port inbound du conteneur aussi dans aws (symetrie ici 3001)

# enfin autoriser l'utilisateur iam a utilser mongo Atlas, ou le process, a tester, là les 2 sont ouverts