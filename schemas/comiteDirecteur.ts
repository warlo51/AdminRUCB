export default {
  name: 'comiteDirecteur',
  type: 'document',
  title: 'Comite Directeur',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telephone'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'colorTitre',
      title: 'Couleur Titre',
      type: 'color'
    },
  ]
}
