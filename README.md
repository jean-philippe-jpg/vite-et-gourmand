
# ECF vite et gourmand

## gestion des branch 

apres avoir créer une branch developpement, </br> depuis la branch principal master. </br>
à partir de la branch developpement, j'ai créer une branch connect, sur laquel j'ai coder un systeme d'inscription et de connexion. </br>
apres vérification du bon fonctionnement de la fonctionnalité, je me suis placer sur la branch developpement pour pousser la branch connect </br>
sur la branch developpement. la branch developpement contenant les element récurent à toutes les pages. pour cela, sur la branch developpement j'ai taper dans le terminal. **git merge connect**.  j'ai répéter l'operation pour les autre branch. j'ai ensuite fait un merge de la branch developpement, vers la branch master.


## MySql

CREATE DATABASE vite;

create table  menus (
    id AUTO_INCREMENT primary key,</br>
    titre varchar(100) not null,</br
    description text not NULL,</br>
    theme varchar(100) not null,</br>
    convives integer not NULL,</br>
    prix INTEGER not NULL,</br>
    condition text not NULL,</br>
    plat_id INTEGER,</br>
    foreign key (plat_id) references liste_de_plat(id)
    
);

create table  liste_de_plat (
    id AUTO_INCREMENT primary key,
    entree varchar(100) not null,
    plat VARCHAR(100) not null,
    dessert VARCHAR(100) not null,
);

