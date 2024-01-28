export default {
  name: 'partenairesPrives',
  type: 'document',
  title: 'Liste des Partenaires Privés',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'site',
      type: 'string',
      title: 'Site',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      title: 'Image'
    },
  ]
}
