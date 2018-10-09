/* 
* Corriger la fonction minMax()
* La fonction récupère un tableau de nombres positifs, négatifs ou nuls
* Et retourne un tableau à 2 entrées contenant la valeur minimale
* et la valeur maximale du tableau récupéré en entrée
* 
* Exemple 1 :
* Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
* Résultat : [-65, 67]
* 
* Exemple 2 :
* Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
* Résultat : [-30, 108]
* 
* Exemple 3 :
* Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
* Résultat : [7, 85]
*/
function minMax(arr){
  let min = [] ;
  let max = [] ;
  let result =[];

 for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }console.log(min)
    if (arr[i] > max) {
      max = arr[i];
    }console.log(max)
}
console.log(min,max)
result.push(min,max)
console.log(result)
return result}


function minMax(arr){
  let min = undefined ;
  let max = undefined ;
  let result =[];

  for (let i = 0; i < arr.length; i++) {
  let j = arr[i];
  min = (j < min)? j : min;
  max = (j > max) ? j : max;
  console.log((max));
  console.log(min);
  result.push(min, max);
  console.log(min, max);
  return result;
}}

minMax([4, 6, 35, -65, -9, 0, 67])