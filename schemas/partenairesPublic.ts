export default {
  name: 'partenairesPublic',
  type: 'document',
  title: 'Liste des Partenaires Public',
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
