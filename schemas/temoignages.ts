export default {
  name: 'temoignages',
  type: 'document',
  title: 'Temoignages',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'colorTitre',
      title: 'Couleur Titre',
      type: 'color'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ]
          }
        }
      ]
    },
    {
      name: 'active',
      type: 'string',
      title: 'Activer sur la page Temoignages',
      options: {
        list: [
          { title: 'Oui', value: 'Oui' },
          { title: 'Non', value: 'Non' },
        ],
      },
    },
  ]
}
