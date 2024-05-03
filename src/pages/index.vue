<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface MaisonRecord {
  adresse: string;
  collectionId: string;
  // ...
}
const maisonsListe: MaisonRecord[] = [
  {
    Adresse: "L'Isle sur le Doubs",
    Favori: true,
    Images:
      'https://v.seloger.com/s/width/800/visuels/1/w/1/d/1w1d06t6cyjtqlyx2x34od7odtz32erfmgmt52pog.jpg',
    NBChambres: 3,
    NbSdb: 1,
    Nom_Maison: 'Maison 1',
    Prix: 159000,
    Surface: '90',
    collectionId: 'spl5e6nmetr4sa9',
    collectionName: 'Maisons',
    created: '2024-04-11 14:52:18.828Z',
    id: 'y4xekv2x135p5am',
    updated: '2024-04-11 14:54:00.066Z'
  },
  {
    Adresse: " L'Isle-Sur-Le-Doubs (25250)",
    Favori: false,
    Images:
      'https://v.seloger.com/s/width/800/visuels/1/u/6/8/1u68y1z1wv5xos18bds5khi5zl82s4pz6s7k5yli1.jpg',
    NBChambres: 2,
    NbSdb: 1,
    Nom_Maison: 'Maison 2',
    Prix: 147000,
    Surface: '95',
    collectionId: 'spl5e6nmetr4sa9',
    collectionName: 'Maisons',
    created: '2024-04-11 14:55:32.924Z',
    id: 'pvwf228okj9jq8m',
    updated: '2024-04-11 14:55:32.924Z'
  },
  {
    Adresse: "L'Isle-Sur-Le-Doubs (25250)",
    Favori: false,
    Images:
      'https://v.seloger.com/s/width/800/visuels/1/y/d/m/1ydm7j6khr6ohvn01naeidr5d8qe13pw533kjwr28.jpg',
    NBChambres: 2,
    NbSdb: 1,
    Nom_Maison: 'Maison 3',
    Prix: 60000,
    Surface: '98',
    collectionId: 'spl5e6nmetr4sa9',
    collectionName: 'Maisons',
    created: '2024-04-11 14:57:40.926Z',
    id: '9iivckqouqjq1vx',
    updated: '2024-04-11 15:00:04.571Z'
  },
  {
    Adresse: "L'Isle-sur-le-Doubs (25250)",
    Favori: true,
    Images:
      'https://v.seloger.com/s/width/800/visuels/2/a/m/n/2amndhz9t1wvar5o3dynvy2fte03axqisotermu8w.jpg',
    NBChambres: 4,
    NbSdb: 1,
    Nom_Maison: 'Maison 4',
    Prix: 170000,
    Surface: '119',
    collectionId: 'spl5e6nmetr4sa9',
    collectionName: 'Maisons',
    created: '2024-04-11 14:59:44.514Z',
    id: 'keeptl9bxp5zid2',
    updated: '2024-04-11 14:59:44.514Z'
  },
  {
    Adresse: "L'Isle-sur-le-Doubs (25250)",
    Favori: false,
    Images:
      'https://v.seloger.com/s/width/800/visuels/0/f/8/y/0f8yt9tuqf1j7zl5gtbhrq2ykiutosl3gg9oj2zuo.jpg',
    NBChambres: 3,
    NbSdb: 1,
    Nom_Maison: 'Maison 5',
    Prix: 299000,
    Surface: '130',
    collectionId: 'spl5e6nmetr4sa9',
    collectionName: 'Maisons',
    created: '2024-04-11 15:03:08.140Z',
    id: '6vtsik4w083b9v3',
    updated: '2024-04-11 15:03:08.140Z'
  }
]
console.log(maisonsListe);

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  
</template>
