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
      name: 'site',
      type: 'string',
      title: 'Site'
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
