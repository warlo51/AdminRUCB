export default {
  name: 'partenairesPrives',
  type: 'document',
  title: 'Partenaires Privés',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom'
    },
    {
      name: 'lien site web',
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
