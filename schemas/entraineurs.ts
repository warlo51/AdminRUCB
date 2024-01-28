export default {
  name: 'entraineurs',
  type: 'document',
  title: 'Page Nos Entraineurs',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telephone',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colorTitre',
      title: 'Couleur Titre',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
  ]
}
