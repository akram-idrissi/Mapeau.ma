# Mapeau.ma - Exercice 1 (Back end)

## Présentation générale

Ce document décrit la structure de la base de données Firestore utilisée pour stocker les diagnostics de peau réalisés par des utilisateurs ou par des professionnels pour des invités. 

## Collections principales

### 1. `diagnostics` (Collection racine)

- Contient l’historique complet de tous les diagnostics réalisés.
- Chaque document représente un diagnostic individuel.
- Un diagnostic peut appartenir à :
  - Un utilisateur enregistré (`ownerType = "user"`) référencé par `ownerId` qui correspond à un document dans la collection `userInfos`.
  - Un invité suivi par un professionnel (`ownerType = "guest"`) référencé par `ownerId` qui correspond à un document dans la collection `proUsers`. Les informations minimales de l’invité (nom, prénom, téléphone) sont stockées directement dans le document diagnostic.

### Structure d’un document diagnostic

- `ownerType` : `"user"` ou `"guest"`.
- `ownerId` : identifiant correspondant soit à un `userId` (dans `userInfos`) soit à un `proUserId` (dans `proUsers`).
- `diagnosticPhotoUrl` : URL vers la photo du diagnostic stockée sur un serveur externe.
- `scores` : objet contenant les 5 critères de score, chacun avec une valeur entre 1 et 100.
- `recommandations` : tableau d’objets listant les produits recommandés, chaque produit avec un `id` et un `barcode`.
- Si `ownerType` est `"guest"`, un champ `client` contient les informations de la personne invitée (`nom`, `prenom`, `telephone`).

### 2. `userInfos` (Collection racine)

- Contient les données personnelles des utilisateurs enregistrés.
- Chaque document est identifié par un `userId`.
- Ces données ne sont pas dupliquées dans les diagnostics, on référence simplement le `userId`.

### 3. `proUsers` (Collection racine)

- Contient les données des professionnels.
- Chaque document est identifié par un `proUserId`.

## Exemples d’utilisation

- Pour récupérer l’historique complet des diagnostics d’un utilisateur donné, on effectue une requête sur `diagnostics` avec filtre sur `ownerType == "user"` et `ownerId == userId`.
- Pour récupérer les diagnostics faits par un professionnel pour ses invités, on filtre sur `ownerType == "guest"` et `ownerId == proUserId`.


# Mapeau.ma - Exercice 2 (Math & TypeScript)

## Partie 1

Ce code réalise la multiplication de deux matrices \( A \) et \( B \).

### Étapes :

1. **Déclaration des matrices**  
   Les matrices \( A \) et \( B \) sont représentées par des tableaux à deux dimensions (`number[][]`).

2. **Vérification de la compatibilité**  
On vérifie que le nombre de colonnes de \( A \) est égal au nombre de lignes de \( B \), condition nécessaire pour pouvoir multiplier les matrices.

3. **Initialisation de la matrice résultat**  
La matrice résultat C sera de taille (nombre de lignes de A) × (nombre de colonnes de B).

4. **Calcul des éléments de la matrice résultat**  
Calcul des éléments de la matrice résultat  

5. **Affichage du résultat**  
Si la multiplication est possible, la matrice résultat est affichée sous forme de tableau.

### Execution

```
cd "exercice 2 - Math/partie 1"

node main.js
```

## Partie 2

### Description du programme

- Le programme génère 20 points aléatoire autour de la droite \( y = ax + b \).
- Il calcule les coefficients \( a \) et \( b \) grâce à la méthode des moindres carrés.
- Il affiche les points générés ainsi que l’équation estimée de la droite.

### Code

```typescript
function generateData(numPoints: number): { x: number; y: number }[] {
  const data: { x: number; y: number }[] = [];
  for (let i = 0; i < numPoints; i++) {
    const x = i;
    const y = 2 * x + 3 + (Math.random() * 4 - 2);
    data.push({ x, y });
  }
  return data;
}

function linearRegression(data: { x: number; y: number }[]): { a: number; b: number } {
  const n = data.length;
  const sumX = data.reduce((acc, p) => acc + p.x, 0);
  const sumY = data.reduce((acc, p) => acc + p.y, 0);
  const sumXY = data.reduce((acc, p) => acc + p.x * p.y, 0);
  const sumX2 = data.reduce((acc, p) => acc + p.x * p.x, 0);

  const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - a * sumX) / n;

  return { a, b };
}

const data = generateData(20);
const { a, b } = linearRegression(data);

console.log("Données (x, y) :", data);
console.log(`Régression linéaire: y = ${a.toFixed(2)}x + ${b.toFixed(2)}`);
```

### Execution

```
cd "exercice 2 - Math/partie 2"

node main.js
```
