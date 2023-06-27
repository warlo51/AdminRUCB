export default {
  name: 'partenairesPublic',
  type: 'document',
  title: 'Partenaires Public',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom'
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      title: 'Image'
    },
  ]
}
