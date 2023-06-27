export default {
  name: 'entraineurs',
  type: 'document',
  title: 'Nos Entraineurs',
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
